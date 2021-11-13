import { CircularProgress, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const OrderManage = () => {

    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://bd-motors.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [user.email, token]);


    // manage DELETE
    const handleDelete = (id) => {
        const isSure = window.confirm("Are You sure, You want to delete");
        if (isSure) {
            fetch(`https://bd-motors.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(
                            (order) => order._id !== id
                        );
                        setOrders(remaining);
                        alert("Deleted Successfully");
                    } else {
                        alert("Failed to delete, please try again");
                    }
                });
        }
    };


    return (
        <div>
            {!user.email ? (
                <div style={{ textAlign: "center" }}>
                    <CircularProgress sx={{ mt: 15 }} />
                </div>
            ) : (
                <div>
                    <h3 style={{ textAlign: "center", marginBottom: '20px'}}>
                        Users All Orders: {orders.length}
                    </h3>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="orders table">
                            <TableHead>
                                <TableRow style={{borderBottom: '2px solid black'}}>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="center">Product Name</TableCell>
                                    <TableCell align="right">City</TableCell>
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
                                            {row.email}
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.name}
                                        </TableCell>

                                        <TableCell align="right">
                                            {row.city}
                                        </TableCell>

                                        <TableCell align="right">
                                            <samp
                                                // onClick={ () => handleStatus(row._id)}
                                                style={{
                                                    marginRight: '10px',
                                                    backgroundColor: '#1BA370',
                                                    border: '1px solid black',
                                                    borderRadius: '5px',
                                                    padding: '2px 5px',
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                }}>
                                                {row.status}
                                            </samp>
                                            <span>
                                                <i style={{color: 'red', cursor: 'pointer',}} onClick={() =>
                                                        handleDelete(row._id)
                                                    } className="far fa-trash-alt" ></i>
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

export default OrderManage;