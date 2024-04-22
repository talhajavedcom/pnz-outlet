import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";


const AddProduct = () => {
  const [name, setName ] = useState("");
  const [price,setPrice ] = useState("");
  const [image,setImage] = useState("");
  const [quantity,setQuantity ] = useState("");
  const [category,setCategory ] = useState("");





  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      const result = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        { name, price, image,quantity, category }
      );
      if (result.data.success) {
        toast.success(result.data.message);
        
      } else {
        // toast.error(result.data.message);
        toast.error("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="account-login section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <form className="card login-form" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="title">
                  <center>
                    <h3>Register New Product</h3>
                  </center>
                </div>

                <label>Name</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <label>Price</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value= {price}
                    placeholder="Rs"
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <label>Image Link</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <label>Quantity</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    className="form-control"
                    type="number"
                    required
                  />
                </div>

                <label>Category</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div className="button">
                  <center>
                    <br />
      
                    <button className="btn" type="submit">
                      Add Now
                    </button>
                  </center>
                </div>

               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
