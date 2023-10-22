import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Spinner from "./Spinner";

const Product = () => {
  const [Product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [random, setRandom] = useState(null);
  const { name } = useParams();
  console.log(name, "iddddddddddddddd");

  const getProduct = async () => {
    try {
      setLoading(true);
      let url = `https://mernb-o5nz.onrender.com/productdetails/${name}`;
      let res = await axios.get(url);
      console.log(res?.data?.data, "resP");
      setProduct(res?.data?.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, [name]);

  const updateProductPrice = async () => {
    setRandom(Math.ceil(Math.random * 100));
    try {
      let url = `https://mernb-o5nz.onrender.com/productpriceupdate/${Product?._id}`;
      let data2 = await axios.get(url);
      console.log(data2.data.product, "data2");
      setProduct(data2?.data.product);
      console.log(Product, "p5");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setInterval(updateProductPrice, 60000);
  }, [Product?._id]);
  console.log(Product, "data3");
  return (
    <>
      <div
        className="container"
        style={{
          width: "40rem",
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>Somthing went wrong...///</h1>
        ) : (
          <div
            className="card"
            style={{ width: "40rem", background: "light-gray" }}
          >
            <div className="card-body">
              <h1 className="card-title">Product</h1>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ background: "blue" }}>
                <b>Product Id:- </b> {Product?._id}
              </li>

              <li className="list-group-item">
                <b>Name:- </b> {Product?.name}
              </li>
              <li className="list-group-item">
                <b>Price:- </b>
                {Product?.price}
              </li>
            </ul>
            {/* <button onClick={updateProductPrice}>Fetch Price</button> */}
            <div className="card-body">
              <Link to="/" className="card-link">
                Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
