import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./css/style.css"; // css
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { useLocation } from "react-router-dom";
import Conatct from "./pages/Conatct";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import UserProfile from "./user/UserProfile";
import UserOrders from "./user/UserOrders";
import UserProfileUpdate from "./user/UserProfileUpdate";
import AdminProfile from "./admin/AdminProfile";
import Orders from "./admin/Orders";
import AdminProfileUpdate from "./admin/AdminProfileUpdate";
import AddCategories from "./admin/AddCategories";
import AddProduct from "./admin/AddProduct";
import AllUsers from "./admin/AllUsers";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./components/Shop";

function App() {
  var arr = [1, 2, 3, 4];
  var newarr = arr.map(function (val) {
    return 13;
  });

  console.log(newarr);

  const location = useLocation();
  const navigate = useNavigate();
  const [topbarKey, setTopbarKey] = useState(0);
  // Define an array of paths where you want to hide
  const hideComponent = [
    "/dashboard",
    "/orders",
    "/admin",
    "/admin/profile",
    "/admin/orders",
    "/admin/update",
    "/admin/add-categories",
    "/admin/add-product",
    "/admin/allusers",
  ];
  const userRole = JSON.parse(localStorage.getItem("user"))?.role;

  const shouldHide =
    hideComponent.includes(location.pathname) && userRole !== 1;

  useEffect(() => {
    if (shouldHide) {
      toast.error("You do not have admin access", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/");
    }
  }, [shouldHide, navigate]);

  const hide = hideComponent.includes(location.pathname);

  // useEffect(() => {
  //   if (hide && localStorage.getItem('user')) {
  //     const userData = JSON.parse(localStorage.getItem('user'));
  //     if (userData.role === 0) {
  //       toast.error('You do not have admin access', {
  //         position: 'top-center',
  //         autoClose: 3000, // Close the message after 3 seconds
  //       });
  //       // Prevent navigation to admin page
  //       navigate('/');
  //     }
  //   }
  // }, [hide, navigate]);

  return (
    <>
      {!hide && <Navbar key={topbarKey} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/user" element={<UserDashboard />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="update" element={<UserProfileUpdate />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="profile" element={<AdminProfile />} />
          <Route path="allusers" element={<AllUsers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="update" element={<AdminProfileUpdate />} />
          <Route path="add-categories" element={<AddCategories />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="profile" element={<AdminProfile />} />
          <Route path="allusers" element={<AllUsers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="update" element={<AdminProfileUpdate />} />
          <Route path="add-categories" element={<AddCategories />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>

      {!hide && <Footer />}
      <ToastContainer />
    </>
  );
}

export default App;
