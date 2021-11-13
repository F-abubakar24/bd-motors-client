import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowReview from "./ShowReview";
import "./ShowReviews.css";

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://bd-motors.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <Container style={{ marginTop: "100px" }}>
            <h2 className="text-center mt-5 mb-3 bottom_underline underline-style">
                Our Bikes
            </h2>
            <Typography
                variant="h4"
                style={{
                    textAlign: "center",
                    color: "#1CC7C1",
                    marginTop: "40px",
                    marginBottom: "40px",
                    fontWeight: 600,
                }}
            ></Typography>
            <Grid container spacing={2}>
                {reviews.map((review) => (
                    <ShowReview key={review.id} review={review}></ShowReview>
                ))}
            </Grid>
        </Container>
    );
};

export default ShowReviews;
