// ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../components/StartRating";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';

const ProductDetail = () => {

  let leaverecview = () => {
    toast("You have not purchased the following item");
  };
  const [product, setData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.cartSlice);



  const incQty = () => {
    dispatch(addtoCart(product));
    
    toast(`${product?.title} added to cart`);
  };

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(`https://dummyjson.com/products/${id}`);
      setData(data.data);
    };

    getData();
  }, [id]);

  return (
    <>
      <section className="item-details section">
        <div className="container">
          <div className="top-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-images">
                  <main id="gallery">
                    <div className="main-img">
                      <img src={product?.thumbnail} alt="img" />
                    </div>

                    <div className="images">
                      {product?.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          className="img"
                          alt="#"
                          style={{ opacity: 1 }}
                        />
                      ))}
                    </div>
                  </main>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-info">
                  <h2 className="title">{product?.title}</h2>
                  <p className="category">
                    <i className="lni lni-tag" /> {product?.category}
                  </p>

                  <span>
                    <StarRating rating={product?.rating} />{" "}
                  </span>

                  <h3 className="price">
                    Rs {product?.price}
                    <span>945</span>
                  </h3>
                  <p className="info-text">{product?.description}</p>

                  <div className="bottom-content">
                    <div className="row align-items-end">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-block give-review">
                          <div className="center">
                            <p></p>
                           
                            <p></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="button cart-button">
                          <button onClick={incQty}  className="btn" style={{ width: "100%" }}>
                          
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details-info">
            <div className="single-block">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="info-body custom-responsive-margin">
                    <h4>Description</h4>
                    <p>{product?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="single-block give-review">
                  <h4>4.5 (Overall)</h4>
                  <ul>
                    <li>
                      <StarRating rating={product?.rating} />
                    </li>
                  </ul>
                  <button type="button" className="btn review-btn" onClick={leaverecview}>
                    Leave a Review
                  </button>
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <div className="single-block give-review">
                  <div className="reviews">
                    <h4 className="title">Recent Comments</h4>
                    <button type="button" className="btn review-btn" onClick={leaverecview}>
                      Leave a Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;




























// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import StarRating from "../components/StartRating";
// import { toast } from "react-toastify";

// import { useDispatch } from 'react-redux';
// import { addtoCart } from '../redux/cartSlice';

// const ProductDetail = () => {
//   let leaverecview = () => {
//     toast("You have not purchased the following item");
//   };



//   const [product, setData] = useState(null);
//   const getData = async () => {
//     let data = await axios.get(`https://dummyjson.com/products/${id}`);
//     setData(data.data);
//   };
//   const {id} = useParams()

//   const dispatch = useDispatch()
  
//   // increasing quantity 
  
//   const incQty = (ele) =>{
//     dispatch(addtoCart(ele))
//   }
  


//   useEffect(() => {
//     getData();
//   }, []);
 
//   return (
//     <>
//       <section className="item-details section">
//         <div className="container">
//           <div className="top-area">
//             <div className="row align-items-center">
//               <div className="col-lg-6 col-md-12 col-12">
//                 <div className="product-images">
//                   <main id="gallery">
//                     <div className="main-img">
//                       <img src={product?.thumbnail} alt="img" />
//                     </div>

//                     <div className="images">
//                       {product?.images.map((image, index) => (
//                         <img
//                           key={index}
//                           src={image}
//                           className="img"
//                           alt="#"
//                           style={{ opacity: 1 }}
//                         />
//                       ))}
//                     </div>
//                   </main>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-12 col-12">
//                 <div className="product-info">
//                   <h2 className="title">{product?.title}</h2>
//                   <p className="category">
//                     <i className="lni lni-tag" /> {product?.category}
//                   </p>

//                   <span>
//                     <StarRating rating={product?.rating} />{" "}
//                   </span>

//                   <h3 className="price">
//                     Rs {product?.price}
//                     <span>945</span>
//                   </h3>
//                   <p className="info-text">{product?.description}</p>

//                   <div className="bottom-content">
//                     <div className="row align-items-end">
                      
//                     <div class="center">
    
//     <p>
//       </p><div class="input-group">
//           <span class="input-group-btn">
//               <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
//                 <span class="glyphicon glyphicon-minus"></span>
//               </button>
//           </span>
//           <input type="text" name="quant[2]" class="form-control input-number" value="10" min="1" max="100"/>
//           <span class="input-group-btn">
//               <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
//                   <span class="glyphicon glyphicon-plus"></span>
//               </button>
//           </span>
//       </div>
// 	<p></p>
// </div>
                   
//                       <div className="col-lg-4 col-md-4 col-12">
//                         <div className="button cart-button">
//                           <button onClick={()=>incQty(product)}  className="btn" style={{ width: "100%" }}>
//                             Add to Cart
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="product-details-info">
//             <div className="single-block">
//               <div className="row">
//                 <div className="col-lg-6 col-12">
//                   <div className="info-body custom-responsive-margin">
//                     <h4>Description</h4>
//                     <p>{product?.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-4 col-12">
//                 <div className="single-block give-review">
//                   <h4>4.5 (Overall)</h4>
//                   <ul>
//                     <li>
//                       <StarRating rating={product?.rating} />
//                     </li>
//                   </ul>
//                   {/* Button trigger modal */}
//                   <button
//                     type="button"
//                     className="btn review-btn"
//                     onClick={leaverecview}
//                   >
//                     Leave a Review
//                   </button>
//                 </div>
//               </div>
//               <div className="col-lg-8 col-12">
//                 <div className="single-block give-review">
//                   <div className="reviews">
//                     <h4 className="title">Recent Comments</h4>
//                     <button
//                       type="button"
//                       className="btn review-btn"
//                       onClick={leaverecview}
//                     >
//                       Leave a Comment
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductDetail;
