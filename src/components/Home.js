import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletetProduct, getProducts } from "../Redux/Actions/ProductsAction";
import Spinner from "./Spinner";
import { AiTwotoneDelete, AiFillEye, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsState = useSelector((state) => state.productsReducer);
  const { loading, products, error } = productsState;

  // console.log(Users.data[0]._id, "Userssssssssssss........////");
  console.log(products, "Userssssssssssss........////");
  // let tables = Users.data;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>Somthing Went Wrong...///</h1>
        ) : products?.data?.length === 0 ? (
          <div>
            <h1>
              "OOOppsss..." No student data available in the data base to
              show...///{" "}
            </h1>
          </div>
        ) : (
          <div>
            <table className="table caption-top table-light">
              <caption>Product List</caption>

              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products?.data?.map((product, Index) => {
                  return (
                    <tr key={product._id}>
                      <th scope="row">{Index + 1}</th>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <div>
                          <button
                            style={{
                              background: "red",
                              marginLeft: "10px",
                            }}
                            onClick={() =>
                              dispatch(deletetProduct(product._id))
                            }
                          >
                            <AiTwotoneDelete
                              style={{
                                color: "white",
                                marginBottom: "5px",
                              }}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
