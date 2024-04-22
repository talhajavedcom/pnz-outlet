import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // State variables to store user data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setaddress] = useState('');
  const [role, setrole] = useState('');

  
 

  // useEffect to fetch user data from local storage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setName(userData.name || '');
      setEmail(userData.email || '');
      setPhone(userData.phone || '');
      setaddress(userData.address || '');
      setrole(userData.role || '');
   
    }
  }, []);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="paddingg">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="cardg user-card-fullg">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profileg">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src={phone}
                        className="img-radiusg"
                        alt="User-Profile"
                      />
                    </div>
                    <p className="text-mutedg">Name</p>
                    <h6 className="f-w-600">{name}</h6>
                    <br />
                    <div className="button">
                      <Link to="/" className="btn">
                        Update Profile
                      </Link>
                    </div>
            
                      {role === 1 ? ( // Check if the user has role 1 (admin)
                        <Link to="/admin">
                          <button className="dashboard-nav-btn">Go to Dashboard</button>&nbsp;&nbsp;
                        </Link>
                      ) : null}
                    <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-blockg">
                    <h6 className="m-b-20 p-b-5 b-b-defaultg f-w-600">Information</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-mutedg f-w-400">{email}</h6>
                        <h6>{address}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-mutedg f-w-400">657865</h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-defaultg f-w-600">Orders</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Recent </p>
                        <h6 className="text-mutedg f-w-400">Sam Disuja</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Previous orders</p>
                        <h6 className="text-mutedg f-w-400">Lorem ipsem</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;













































// import React from 'react'
// import { Link } from 'react-router-dom'

// const UserProfile = () => {
//     return (

//         <div class="page-content page-container" id="page-content">
//             <div class="paddingg">
//                 <div class="row container d-flex justify-content-center">
//                     <div class="col-xl-6 col-md-12">
//                         <div class="cardg user-card-fullg">
//                             <div class="row m-l-0 m-r-0">
//                                 <div class="col-sm-4 bg-c-lite-green user-profileg">
//                                     <div class="card-block text-center text-white">
//                                         <div class="m-b-25">
//                                             <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radiusg" alt="User-Profile" />
//                                         </div>
//                                         <p className='text-mutedg'>Name</p>
//                                         <h6 class="f-w-600">Hembo Tingor</h6>
//                                         <br />
//                                         <div class="button">
//                                             <Link to="/" class="btn">Update Profile</Link>
//                                         </div>
//                                         {/* <div class="button">
//                           <Link to="/" class="btn">Logout</Link>
//                         </div> */}


//                                         <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-8">
//                                     <div class="card-blockg">
//                                         <h6 class="m-b-20 p-b-5 b-b-defaultg f-w-600">Information</h6>
//                                         <div class="row">
//                                             <div class="col-sm-6">
//                                                 <p class="m-b-10 f-w-600">Email</p>
//                                                 <h6 class="text-mutedg f-w-400">rntng@gmail.com</h6>
//                                             </div>
//                                             <div class="col-sm-6">
//                                                 <p class="m-b-10 f-w-600">Phone</p>
//                                                 <h6 class="text-mutedg f-w-400">98979989898</h6>
//                                             </div>
//                                         </div>
//                                         <h6 class="m-b-20 m-t-40 p-b-5 b-b-defaultg f-w-600">Projects</h6>
//                                         <div class="row">
//                                             <div class="col-sm-6">
//                                                 <p class="m-b-10 f-w-600">Recent</p>
//                                                 <h6 class="text-mutedg f-w-400">Sam Disuja</h6>
//                                             </div>
//                                             <div class="col-sm-6">
//                                                 <p class="m-b-10 f-w-600">Most Viewed</p>
//                                                 <h6 class="text-mutedg f-w-400">Dinoter husainm</h6>
//                                             </div>
//                                         </div>


//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default UserProfile