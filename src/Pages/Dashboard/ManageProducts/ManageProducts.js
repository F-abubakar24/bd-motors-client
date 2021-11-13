import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductManage from "./ManageProduct";
import "./ManageProducts.css";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://bd-motors.herokuapp.com/bikes")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div id="services" className="container mb-5">
            <h2 className="underline-style text-center mt-5 bottom_underline">
                Our Bikes
            </h2>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {products.map((product) => (
                    <ProductManage
                        key={product._id}
                        product={product}
                        setProducts={setProducts}
                        products={products}
                    ></ProductManage>
                ))}
            </Row>
        </div>
    );
};

export default ManageProducts;
