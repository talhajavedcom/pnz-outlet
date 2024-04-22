import React from 'react'

const HeroSection = () => {
  return (

    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">

    <div className="carousel-item active">
      
    <center><iframe width="500" height="500" src="https://embed.studio.binkies3d.com/live3d/6572c1793ef7510053690cd2" frameborder="0" allowfullscreen></iframe></center>
    </div>
    <div className="carousel-item active">
      <img src="heroImages/8.png"  className="d-block w-100" alt="..." />
    </div>
   
   
 
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>


  )
}

export default HeroSection





























    
// <section className="hero-area">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-8 col-12 custom-padding-right">
//         <div className="slider-head">
//           {/* Start Hero Slider */}
//           <div className="hero-slider">
//             {/* Start Single Slider */}
//             <div className="single-slider" style={{ backgroundImage: `url(https://i.postimg.cc/XNkdQcjn/slider-bg2.jpg)` }}>
//               <div className="content">
//                 <h2><span>No restocking fee ($35 savings)</span>
//                   M75 Sport Watch
//                 </h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                   incididunt ut labore et dolore magna aliqua.</p>
//                 <h3><span>Now Only</span> $320.99</h3>
//                 <div className="button">
//                   <a href="product-grids.html" className="btn">Shop Now</a>
//                 </div>
//               </div>
//             </div>
//             {/* End Single Slider */}
//             {/* Start Single Slider */}
      
//             {/* End Single Slider */}
//           </div>
//           {/* End Hero Slider */}
//         </div>
//       </div>
//       <div className="col-lg-4 col-12">
//         <div className="row">
//           <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
//             {/* Start Small Banner */}
//             <div className="hero-small-banner" style={{backgroundImage: 'url(https://i.postimg.cc/02tmqkK3/slider-bnr.jpg)'}}>
//               <div className="content">
//                 <h2>
//                   <span>New line required</span>
//                   iPhone 12 Pro Max
//                 </h2>
//                 <h3>$259.99</h3>
//               </div>
//             </div>
//             {/* End Small Banner */}
//           </div>
//           <div className="col-lg-12 col-md-6 col-12">
//             {/* Start Small Banner */}
//             <div className="hero-small-banner style2">
//               <div className="content">
//                 <h2>Weekly Sale!</h2>
//                 <p>Saving up to 50% off all online store items this week.</p>
//                 <div className="button">
//                   <a className="btn" href="product-grids.html">Shop Now</a>
//                 </div>
//               </div>
//             </div>
//             {/* Start Small Banner */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>