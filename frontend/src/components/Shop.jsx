import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarRating from './StartRating';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setData(response.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

    };

    const clearFilter = () => {
        setSelectedCategory(null);

    };

    useEffect(() => {
        getData();
    }, []);

    const filteredProducts = selectedCategory
        ? data.filter(item => item.category === selectedCategory)
        : data;

    return (
        <section className="product-grids section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="product-sidebar">

                            <div className="single-widget">
                                <h3>All Categories</h3>
                                <ul className="list">
                                    {/* Map through categories and render links */}
                                    {['smartphones', 'laptops', 'skincare', 'home-decoration', 'groceries', 'fragrances', 'womens-watches', 'womens-jewellery', 'womens-bags'].map((category) => (
                                        <li key={category}>
                                            <Link onClick={() => handleCategoryClick(category)}>{category}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="single-widget condition">
                                <button className="btn" onClick={clearFilter}>
                                    Clear Filter
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="product-grids-head">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                    <div className="row">
                                        {filteredProducts.map((item) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                                <div className="single-product">
                                                    <div className="product-image">
                                                        <img src={item.thumbnail} alt="#" height={250} width={250} />
                                                        <span className="sale-tag">{item.discountPercentage}%</span>
                                                        <div className="button">
                                                            <button className="btn"><i className="lni lni-cart" /> Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product-info">
                                                        <span className="category">{item.category}</span>
                                                        <h4 className="title">
                                                            <a href="product-grids.html">{item.title.slice(0, 28)}</a>
                                                        </h4>
                                                        <ul className="review">
                                                            <li><StarRating rating={item?.rating} /></li>
                                                            <li>{item?.rating.rate} </li>
                                                            <li>({item.stock}) In Stock</li>
                                                        </ul>
                                                        <div className="price">
                                                            <span>Rs {item.price}</span> &nbsp; &nbsp; &nbsp;
                                                            <span>
                                                                <Link to={`/products/Rs ${item.id}`}><button className="button dashboard-nav-btn">View Details</button></Link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
