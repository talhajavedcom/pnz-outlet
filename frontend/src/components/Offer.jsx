import React from 'react'

const Offer = () => {
  return (
 <section className="banner section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        <div className="single-banner" style={{backgroundImage: 'url("https://demo.graygrids.com/themes/shopgrids/assets/images/banner/banner-1-bg.jpg")'}}>
          <div className="content">
            <h2>Smart Watch</h2>
            <p>Space Gray Aluminum Case with <br />Black/Volt Real Sport Band </p>
            <div className="button">
              <a href="product-grids.html" className="btn">View Details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="single-banner custom-responsive-margin" style={{backgroundImage: 'url("https://demo.graygrids.com/themes/shopgrids/assets/images/banner/banner-2-bg.jpg")'}}>
          <div className="content">
            <h2>Latest Headphone</h2>
            <p>Lorem ipsum dolor sit amet, <br />eiusmod tempor
              incididunt ut labore.</p>
            <div className="button">
              <a href="product-grids.html" className="btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Offer