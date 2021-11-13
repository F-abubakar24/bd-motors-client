import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const successTime = () => {
        setSuccess(false);
    };

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch("https://bd-motors.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setTimeout(successTime, 5000);
                } else {
                    alert("Make Admin -- failed!");
                }
            });
        e.target.email.value = "";
        e.preventDefault();
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{ width: "100%", m: 1 }}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    onBlur={handleOnBlur}
                />
                <br />
                <Button
                    sx={{ width: "100%", m: 1 }}
                    style={{
                        backgroundColor: "#1BA370",
                        textTransform: "capitalize",
                    }}
                    type="submit"
                    variant="contained"
                >
                    Make Admin
                </Button>
            </form>
            {success && (
                <Alert sx={{ mt: 3 }} severity="success">
                    Made Admin Successfully
                </Alert>
            )}
        </div>
    );
};

export default MakeAdmin;
