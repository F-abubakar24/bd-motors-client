import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import helmet from '../../../images/helmet.png';
import Button from '@mui/material/Button';
import './AboutBike.css';

const AboutBike = () => {
    return (
        <div className="about_bike_wrapper">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <h1 className="mt-5 mb-3">About bikestore</h1>
                        <p>The more we drive the car the better they seem to operate operate. No noise, just stopping power! Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam</p>
                        <p>vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit qui in ea voluptate vele.</p>
                        <Button sx={{mt: 2}} style={{backgroundColor: "#1BA370", textTransform: 'capitalize'}} variant="contained">Contained</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img style={{width: '99%'}} src={helmet} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AboutBike;