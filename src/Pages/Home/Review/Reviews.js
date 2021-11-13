import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)


    return (
        <Container>
            <Typography
                variant="h4"
                style={{
                    textAlign: "center",
                    color: "#1CC7C1",
                    marginTop: "40px",
                    marginBottom: "40px",
                    fontWeight: 600,
                }}
            >
            </Typography>
            <Grid container spacing={2}>
                {reviews.map((review) => (
                    <Review
                        key={review.id}
                        review={review}
                    ></Review>
                ))}
            </Grid>
        </Container>
    );
};

export default Reviews;
