import React, { useState } from 'react';
import '../Styles/Product.css';
import products from '../Db';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(8); // Initial number of visible products
  const [query,setQuery] = useState('')
  

  // Function to filter products based on selected filters
  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .filter(product => selectedColor === 'all' || product.color === selectedColor)
    .filter(product => {
      if (selectedPrice === 'all') return true;
      if (selectedPrice === 'low') return product.price <= 100;
      if (selectedPrice === 'high') return product.price > 100;
      return true;
    })
    .filter((product) => (
      product.title.toLowerCase().includes(query.toLowerCase())
    )) /* Search functionality here */

  // Function to load more products
  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8); // Load 8 more products
  };


  
  return (
    <div className='container my-2'>
      <div className="">
        <div className="Filter d-flex align-items-center my-2">
        <h4 className='container-text mx-2'>Filter</h4>
        <select className="w-25 h-25" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="sneakers">Sneakers</option>
          <option value="flats">Flats</option>
          <option value="sandals">Sandals</option>
          <option value="heels">Heals</option>
        </select>
      </div>

      <div className="price d-flex align-items-center my-1">
        <h4 className='container-text mx-2'>Price</h4>
        <select className="w-25 h-25" onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="all">Select price range</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      <div className="color d-flex align-items-center my-1">
        <h4 className='container-text '>Colors</h4>
        <select className="w-25 h-25" onChange={(e) => setSelectedColor(e.target.value)}>
          <option value="all">Select Colours</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="white">White</option>
        </select>
      </div>
      <div className='my-2'>

      <input placeholder='Search here' onChange={(e) =>setQuery(e.target.value)} value={query} className='search-bar d-flex align-items-center justify-content-center mx-auto' type="text" />
      
      </div>
      </div>

      <div className="row">
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <div className="col-md-3 flex-wrap mb-4" key={index}>
            <div className="card card-container">
              <div className="card-body">
              <Link to={`/product/${encodeURIComponent(product.title)}`}>
                <img className='filtered-image mx-auto' src={product.img} alt={product.title} />
                <h2 className='fs-5 fw-normal my-2'>{product.title}</h2>
                </Link>
                <div className="d-flex align-items-center">
                  <div className="star text-warning fs-4">★★★★</div>
                  <div className="reviews">{product.reviews}</div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="price d-flex align-items-center justify-content-center gap-4">
                    <h4 className='text-danger text-decoration-line-through prev-price'>{product.prevPrice}</h4>
                    <h4 className='text-success new-price'>${product.newPrice}</h4>
                  </div>
                  <div className="shop" >
                    <FaCartArrowDown fontSize={'2em'}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts < filteredProducts.length && (
        <div className="text-center my-4">
          <button className="btn btn-primary" onClick={loadMoreProducts}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Product;
