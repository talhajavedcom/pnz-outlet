// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incQuantity, decQuantity } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartSlice);

  // Incrementing quantity by clicking plus button
  const incQty = (item) => {
    toast('Increment button clicked');
    dispatch(incQuantity(item.id));
  };

  // Decrementing quantity by clicking minus button
  const decQty = (item) => {
    dispatch(decQuantity(item.id));
  };

  const removeItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  // Calculate cart subtotal
  const cartSubtotal = carts.reduce((total, item) => total + item.price * item.qnty, 0);

  // Create checkout
  const createCheckout = async () => {
    try {
      const response = await axios.post('YOUR_BACKEND_API/create-checkout', {
        items: carts.map((item) => ({
          title: item.title,
          price: item.price,
          quantity: item.qnty,
        })),
      });

      // Redirect to the checkout page
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast.error('Error creating checkout');
    }
  };

  return (
    <div className="shopping-cart section">
      <div className="container">
        <div className="cart-list-head">
          <div className="cart-list-title">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-12"></div>
              <div className="col-lg-4 col-md-3 col-12">
                <p>Product Name</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Quantity</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Subtotal</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Discount</p>
              </div>
              <div className="col-lg-1 col-md-2 col-12">
                <p>Remove</p>
              </div>
            </div>
          </div>
        </div>

        {carts.map((item) => (
          <div className="cart-single-list" key={item.id}>
            <div className="row align-items-center">
              <div className="col-lg-1 col-md-1 col-12">
                <a href="product-details.html"><img src={item?.thumbnail} alt="#" /></a>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <h5 className="product-name"><a href="product-details.html">{item?.title}</a></h5>
                <p className="product-des">
                  <span><em>Category</em> {item.category}</span>
                  <span><em>Brand:</em>{item.brand}</span>
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <div className="count-input">
                  
                  {item.qnty}
                  <button onClick={() => removeItem(item.id)} className='btn btn-dark ms-2 btn-sm'>-</button>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>RS {(item.price * item.qnty).toFixed(2)}</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Rs 0</p>
              </div>
              <div className="col-lg-1 col-md-2 col-12">
                <button className="remove-item" onClick={() => removeItem(item.id)}>
                  <i className="lni lni-close" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="row">
          <div className="col-12">
            <div className="total-amount">
              <div className="row">
                <div className="col-lg-8 col-md-6 col-12"></div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="right">
                    <ul>
                      <li>Cart Subtotal<span>RS {cartSubtotal.toFixed(2)}</span></li>
                      <li>Shipping<span>Free</span></li>
                      {/* <li>You Save<span>RS 00</span></li> */}
                      <li className="last">You Pay<span>RS {cartSubtotal.toFixed(2)}</span></li>
                    </ul>
                    <div className="button">
                      <button onClick={createCheckout} className="btn">Checkout</button>
                      <a href="/#pr" className="btn btn-alt">Continue shopping</a>
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

export default Cart;










































// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, incQuantity, decQuantity } from '../redux/cartSlice';
// import { toast } from "react-toastify";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const { carts } = useSelector(state => state.cartSlice);

//   // Incrementing quantity by clicking plus button
//   const incQty = (item) => {
//     toast('Increment button clicked');
//   dispatch(incQuantity(item.id));
//   };

//   // Decrementing quantity by clicking minus button
//   const decQty = (item) => {
//     dispatch(decQuantity(item.id));
//   };

//   const removeItem = (itemId) => {
//     dispatch(removeFromCart({ id: itemId }));
//   };

//   // Calculate cart subtotal
//   const cartSubtotal = carts.reduce((total, item) => total + item.price * item.qnty, 0);

//   return (
//     <div className="shopping-cart section">
//       <div className="container">
//         <div className="cart-list-head">
//           {/* Cart List Title */}
//           <div className="cart-list-title">
//             <div className="row">
//               <div className="col-lg-1 col-md-1 col-12"></div>
//               <div className="col-lg-4 col-md-3 col-12">
//                 <p>Product Name</p>
//               </div>
//               <div className="col-lg-2 col-md-2 col-12">
//                 <p>Quantity</p>
//               </div>
//               <div className="col-lg-2 col-md-2 col-12">
//                 <p>Subtotal</p>
//               </div>
//               <div className="col-lg-2 col-md-2 col-12">
//                 <p>Discount</p>
//               </div>
//               <div className="col-lg-1 col-md-2 col-12">
//                 <p>Remove</p>
//               </div>
//             </div>
//           </div>
//           {/* End Cart List Title */}
//         </div>
//         {/* Cart Single List list */}
//         {carts.map((item) => (
//           <div className="cart-single-list" key={item.id}>
//             <div className="row align-items-center">
//               <div className="col-lg-1 col-md-1 col-12">
//                 <a href="product-details.html"><img src={item?.thumbnail} alt="#" /></a>
//               </div>
//               <div className="col-lg-4 col-md-3 col-12">
//                 <h5 className="product-name"><a href="product-details.html">{item?.title}</a></h5>
//                 <p className="product-des">
//                   <span><em>Category</em> {item.category}</span>
//                   <span><em>Brand:</em>{item.brand}</span>
//                 </p>
//               </div>
//               <div className="col-lg-2 col-md-2 col-12">
//                 <div className="count-input">
//                   <button onClick={() => incQty(item)} className='btn btn-dark me-2 btn-sm'>+</button>
//                   {item.qnty}
//                   <button onClick={() => removeItem(item.id)} className='btn btn-dark ms-2 btn-sm'>-</button>
//                 </div>
//               </div>
//               <div className="col-lg-2 col-md-2 col-12">
//                 <p>RS {(item.price * item.qnty).toFixed(2)}</p>
//               </div>
//               <div className="col-lg-2 col-md-2 col-12">
//                 <p>Rs 0</p>
//               </div>
//               <div className="col-lg-1 col-md-2 col-12">
//                 <button className="remove-item" onClick={() => removeItem(item.id)}>
//                   <i className="lni lni-close" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* End Single List list */}
//         <div className="row">
//           <div className="col-12">
//             {/* Total Amount */}
//             <div className="total-amount">
//               <div className="row">
//                 <div className="col-lg-8 col-md-6 col-12"></div>
//                 <div className="col-lg-4 col-md-6 col-12">
//                   <div className="right">
//                     <ul>
//                       <li>Cart Subtotal<span>RS {cartSubtotal.toFixed(2)}</span></li>
//                       <li>Shipping<span>Free</span></li>
//                       <li>You Save<span>RS 00</span></li>
//                       <li className="last">You Pay<span>RS {cartSubtotal.toFixed(2)}</span></li>
//                     </ul>
//                     <div className="button">
//                       <a href="checkout.html" className="btn">Checkout</a>
//                       <a href="product-grids.html" className="btn btn-alt">Continue shopping</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*/ End Total Amount */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
