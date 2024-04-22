import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StarRating from './StartRating'
import { Link } from 'react-router-dom';



const ProductSection = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    let data = await axios.get('https://dummyjson.com/products')
    setData(data.data.products)

  }





  useEffect(() => {
    getData()
  }, [])



  return (
    <section className="trending-product section" style={{ marginTop: 12 }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 id='pr'>PNZ Collection</h2>
              <p>There are many variations</p>
            </div>
          </div>
        </div>
        <div className="row">

        {data.map((item)=>{
          return(
              
          <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Product */}
          <div className="single-product">
            <div className="product-image">
              <img src={item.thumbnail }alt="#" height={250}  width={250}/>
              <span class="sale-tag">{item.discountPercentage}%</span>
              <div className="button">
                <button  className="btn"><i className="lni lni-cart" /> Add to Cart</button>
              </div>
            </div>
            <div className="product-info">
              <span className="category">{item.category}</span>
              <h4 className="title">
                <a href="">{item.title.slice(0, 28)}</a>
              </h4>
              <ul className="review">

                <li><StarRating rating={item?.rating}/></li>
                <li>{item?.rating.rate} </li>
                <li>({item.stock }) In Stock</li>
              
              
                
                
                
                
                 
              </ul>
              <div className="price">
                <span>Rs {item.price}</span> &nbsp; &nbsp; &nbsp;
                
                 <span>
                  
                 <Link to={`/products/${item.id}`}><button  className= " button dashboard-nav-btn" >View Deails</button></Link>
                  
            
                  </span>
              </div>
            </div>
          </div>
          {/* End Single Product */}
        </div>
          )
        })}


        </div>
        
      </div>
    </section>

  )
}

export default ProductSection















