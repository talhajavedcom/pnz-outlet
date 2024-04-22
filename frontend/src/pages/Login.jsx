import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

import {  useNavigate } from "react-router-dom";
import { setUserAuthentication } from "../auth";
// 6LegzgIpAAAAAOXIz6k4z8ZFPjs7Nh2-MJaZbbpd

const Login = ( ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const Navi = useNavigate() 

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password}
      );
      if(result.data.success){
        setUserAuthentication(result.data.user);
        toast.success(result.data.message)
        Navi('/')
        
      }else{
        toast.error(result.data.message) 
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
              <center><h3>Login Now</h3></center>
         
            </div>
       
            <label >Email</label>
            <div className="form-group input-group">
              
              <input  onChange={(e) => setEmail(e.target.value)}
                    value={email} className="form-control" type="email" required />
            </div>
            <label>Password</label>
            <div className="form-group input-group">
             
              <input  onChange={(e) => setPassword(e.target.value)}
                    value={password} className="form-control" type="password"  required />
            </div>
            <div className="d-flex flex-wrap justify-content-between bottom-content">
              <Link className="lost-pass" to="/">Forgot password?</Link>
            </div>
            <center>
            
            </center>
            <div className="button">
        <center>      <button   className="btn" type="submit">Login Now</button></center>
            </div>
            <center><p className="outer-link">if Don't have an account? <Link to="/signup">Please Register here </Link>
            </p></center>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



  )
}

export default Login





















































































































// import React from 'react'

// const Login = () => {
//   return (
// <div className="account-login section">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
//         <form className="card login-form" method="post">
//           <div className="card-body">
//             <div className="title">
//               <center><h3>Login Now</h3></center>
         
//             </div>
       
//             <label >Email</label>
//             <div className="form-group input-group">
              
//               <input className="form-control" type="email" required />
//             </div>
//             <label>Password</label>
//             <div className="form-group input-group">
             
//               <input className="form-control" type="password"  required />
//             </div>
//             <div className="d-flex flex-wrap justify-content-between bottom-content">
//               <a className="lost-pass" href="account-password-recovery.html">Forgot password?</a>
//             </div>
//             <div className="button">
//         <center>      <button className="btn" type="submit">Login Now</button></center>
//             </div>
//             <center><p className="outer-link">if Don't have an account? <a href="register.html">Please Register here </a>
//             </p></center>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>



//   )
// }

// export default Login