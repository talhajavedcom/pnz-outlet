import { toast } from "react-toastify";
import axios from "axios";
import React from 'react'
import { useState, useEffect } from 'react'




const AllUsers = () => {



  const [responseData, setData] = useState([])
  //  Post data in Register
  /// Get Data
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/userss');
      const responseData = response.data; // Extract the data
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error appropriately
    }
  }

  const deleteUser = async (id) => {
    let del = await axios.delete(`http://127.0.0.1:8080/deleteuser/${id}`)
    
    if (del) {
      toast.success(del.data.message)
      getData() 
    }}
   
  useEffect(() => {
    getData()
  }, [])

  return (

    <>
      <center className='mt-1'>

        {/* <div class="form-group w-50">
        <h3> All Records</h3>
        <div class="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" onChange={search} placeholder="Jhon Doe" />
          <label for="floatingInput">Search Name,	Address, Email</label>
        </div>
      </div> */}



        <table style={{ width: "90%" }} className=" align-items-center justify-content-center  table table-hover">
          <thead>
            <tr>
              <th scope="col">No.</th>
              
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
             
            </tr>
          </thead>
          <tbody>
            {responseData.map((x, i) => {
              return (
                <tr className="table-light text">
                  <td scope="row">{i + 1} </td>
                
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.address}</td>
                  <td>{x.phone}</td>
                  
                  <td>  
                  <button className=" dashboard-nav-btn" onClick={() => { deleteUser(x._id) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </center>




     
    </>
  )
}

export default AllUsers














