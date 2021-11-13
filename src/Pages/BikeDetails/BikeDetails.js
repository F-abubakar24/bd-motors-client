import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./BikeDetails.css";

const BikeDetails = () => {
    const { bikeId } = useParams();
    const [bike, setBike] = useState({});
    const { user } = useAuth();
    const [users, setUsers] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    let updateName = "";
    const handleNameChange = (e) => {
        const Name = e.target.value;
        updateName = updateName + Name;
        setUsers(updateName);
    };

    // send users booking form data
    const onSubmit = (data) => {
        const { city, email, userName, phone } = data;
        const { pic, name, price, description } = bike;
        const status = "pending";
        const order = {
            status,
            city,
            email,
            name,
            phone,
            pic,
            userName,
            price,
            description,
        };
        fetch("https://bd-motors.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Order send Successfully");
                    reset();
                }
            });
    };

    // load single users data
    useEffect(() => {
        fetch(`https://bd-motors.herokuapp.com/bikes/${bikeId}`)
            .then((res) => res.json())
            .then((data) => {
                setBike(data);
            });
    }, []);

    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div className="container">
                <div className="row">
                    <div
                        className="single-service p-0 col-sm-12 col-md-12 col-lg-6"
                        style={{ marginTop: "100px", marginBottom: "100px" }}
                    >
                        <div className="service-img">
                            <img
                                style={{ width: "100%" }}
                                src={bike?.pic}
                                alt=""
                            />
                        </div>
                        <div className="service-info p-3">
                            <h3>{bike?.name}</h3>
                            <h4>
                                <span>Price:</span> {"$" + bike?.price}
                            </h4>
                            <p>{bike?.description}</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 booking_form">
                        <div className="row single_service_wrapper">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto booking_wrapper">
                                <div className=" text-center">
                                    <h2>Book Now</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-floating mb-3 mt-4">
                                            <input
                                                {...register("userName")}
                                                defaultValue={
                                                    user?.displayName ||
                                                    users ||
                                                    ""
                                                }
                                                onChange={handleNameChange}
                                                type="text"
                                                className="form-control"
                                                id="floatingInput"
                                                required
                                                placeholder=" "
                                            />
                                            <label htmlFor="floatingInput">
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                {...register("email")}
                                                defaultValue={user.email}
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                required
                                                placeholder=" "
                                            />
                                            <label htmlFor="floatingInput">
                                                Email
                                            </label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                {...register("city")}
                                                type="text"
                                                className="form-control"
                                                id="floatingInput"
                                                required
                                                placeholder=" "
                                            />
                                            <label htmlFor="floatingInput">
                                                City
                                            </label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                {...register("phone")}
                                                type="tel"
                                                className="form-control"
                                                id="floatingInput"
                                                required
                                                placeholder=" "
                                            />
                                            <label htmlFor="floatingInput">
                                                Phone
                                            </label>
                                        </div>
                                        {/* <p className="text-danger">{error || userError}</p> */}
                                        <input
                                            className="work_btn"
                                            type="submit"
                                            value="Book"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default BikeDetails;
