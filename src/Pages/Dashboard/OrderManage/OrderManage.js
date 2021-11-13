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


    return (
        <div>
            {!user.email ? (
                <div style={{ textAlign: "center" }}>
                    <CircularProgress sx={{ mt: 15 }} />
                </div>
            ) : (
                <div>
                    <h3 style={{ textAlign: "center", marginBottom: '20px'}}>
                        My Orders: {orders.length}
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
                                            <span className="delete_icon">
                                                <i className="far fa-trash-alt" ></i>
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