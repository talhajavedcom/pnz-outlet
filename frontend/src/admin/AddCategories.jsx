import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import axios from 'axios';

const AddCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/category/add", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };


  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/category/all");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/category/update/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
      
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="account-login section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <form onSubmit={handleSubmit} className="card login-form" >
              <div className="card-body">
                <div className="title">
                  <center><h3>Add New Category</h3></center>

                </div>
                <label>Category</label>
                <div className="form-group input-group">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    value={name}
                    required
                  />
                </div>


                <div className="button">
                  <center>      <button className="btn" type="submit">Add Now</button></center>
                </div>


              </div>
            </form>
            <br />

            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>
                      <button onClick={() => handleDelete(c._id)} className="dashboard-nav-btn">
                        Delete
                      </button>
                      <button onClick={() => handleUpdate(c._id)} className="dashboard-nav-btn">
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
       
        </div>
      </div>
    </div>



  )
}

export default AddCategories