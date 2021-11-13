import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';

const MyOrders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/orders?email=${user?.email}`, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data)
            });
    }, [user.email, token]);

    // manage DELETE
    const handleDelete = id => {
        const isSure = window.confirm("Are You sure, You want to delete")
        if (isSure) {
                
            fetch(`http://localhost:4000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        alert('Deleted Successfully');
                    } else {
                        alert('Failed to delete, please try again');
                    }
                })
        }
    }

    return (
        <div>
            {!user.email ? (
                <div style={{ textAlign: "center" }}>
                    <CircularProgress sx={{ mt: 15 }} />
                </div>
            ) : (
                <div>
                        <h3 style={{textAlign: 'center'}}>My Orders: {orders.length}</h3>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="orders table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                           $ {row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            <span className="delete_icon">
                                                <i onClick={() => handleDelete(row._id)} className="far fa-trash-alt"></i>
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    );
};

export default MyOrders;
