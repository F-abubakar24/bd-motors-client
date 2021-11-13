import React from 'react';
import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Review = ({review}) => {
    const { userName, email, text, rating } = review;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={6} sx={{py: 3, px: 1}} style={{textAlign: 'center'}}>
                <Paper elevation={3} sx={{ py: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 0, textAlign: "center" }} xs={2} >
                            <span className='user_icon'><i style={{fontSize: '35px', textAlign: 'center'}} class="fas fa-user"></i></span>
                        </Grid>
                        <Grid item sx={{ mt: 0, textAlign: "center" }} xs={10} >
                            <Box style={{textAlign: 'left', borderLeft: '1px solid lightGray'}} sx={{pl: 2}}>
                                <Typography sx={{ fontWeight: 600, fontSize: '24px', color: '#1BA370', marginBottom: '-4px' }} variant="h6" gutterBottom component="div">
                                    {userName}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{ fontSize: '20px', marginBottom: '3px' }}>{email}</Typography>
                                <Typography variant="caption" display="block" gutterBottom sx={{ py: 1, fontSize: '17px' }}>{text}</Typography>
                                <Rating sx={{ fontSize: '25px'}} name="read-only" value={rating} readOnly />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default Review;