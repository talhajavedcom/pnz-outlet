import React from 'react'
import { Link, Outlet, useNavigate  } from 'react-router-dom';
import logo from '../assets/Images/logo.png'


const AdminDashboard = () => {

  const navigate = useNavigate();

const handleLogout = () => {
  // Perform logout logic here (e.g., clear user session or tokens)
  
  
  localStorage.removeItem('authenticated'); 
  // Redirect to the home page after logout
  navigate('/');
};
  return (
    <>

<div className=" container-fluid">
  <div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline"><img src={logo} alt="Logo" /></span>
        </Link>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <Link to="profile" className="nav-link align-middle px-0">
       <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">My Profile</span>
            </Link>
          </li>
          <li>
            <Link to='' data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">Dashboard</span> </Link>
            {/* <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to="update" className="nav-link px-0 align-middle">
               <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">Update Profile</span></Link>
          </li>
          <li>
            <Link to="orders" className="nav-link px-0 align-middle">
               <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">Orders</span></Link>
          </li>
          <li>
            <Link to="add-categories" className="nav-link px-0 align-middle">
               <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">Add Category</span></Link>
          </li>
          <li>
            <Link to="add-product" className="nav-link px-0 align-middle">
             <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">Add Product</span></Link>
          </li>
         
          <li>
            <Link to="allusers" className="nav-link px-0 align-middle">
            <span className="ms-1 dashboard-logout-btn d-none d-sm-inline">Customers</span> </Link>
          </li>
        </ul>
        <hr />
        <div className=" pb-4">
        <div class="button fixed-logout "><button onClick={handleLogout} class="btn">Logout<span class="dir-part"></span></button></div>
         
        </div>
      </div>
    </div>
    <div className="section col py-3">
    <Outlet />
  

    </div>
  </div>
</div>


    
      


    
    </>
  )
}

export default AdminDashboard














































// import React from 'react'
// import { Link, Outlet } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <>

// <div className="container-fluid">
//   <div className="row flex-nowrap">
//     <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//       <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//         <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//           <span className="fs-5 d-none d-sm-inline">Menu</span>
//         </a>
//         <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//           <li className="nav-item">
//             <a href="#" className="nav-link align-middle px-0">
//               <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
//             </a>
//           </li>
//           <li>
//             <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
//               <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//             <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//               <li className="w-100">
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#" className="nav-link px-0 align-middle">
//               <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
//           </li>
//           <li>
//             <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
//               <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
//             <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
//               <li className="w-100">
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
//               <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
//             <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
//               <li className="w-100">
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#" className="nav-link px-0 align-middle">
//               <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
//           </li>
//         </ul>
//         <hr />
//         <div className="dropdown pb-4">
//           <a href="#" className="d-flex align-items-center  text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//             <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
//             <span className="d-none d-sm-inline mx-1">loser</span>
//           </a>
//           <ul className="dropdown-menu dropdown-menu-dark  shadow">
           
//             <li><a className="dropdown-item" href="#">Profile</a></li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li><a className="dropdown-item" href="#">Sign out</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="col py-3">
//       Content area...
//     </div>
//   </div>
// </div>


//       <Link to="profile"   ><button className='btn'>Profile</button></Link>
//       <Link to="update"    ><button className='btn'>UpdateProfile</button></Link>
//       <Link to="orders"    ><button className='btn'>orders</button></Link>
//       <Link to="add-categories"    ><button className='btn'>UpdateProfile</button></Link>
//       <Link to="add-product"    ><button className='btn'>orders</button></Link>


//       <Outlet />
//     </>
//   )
// }

// export default AdminDashboard