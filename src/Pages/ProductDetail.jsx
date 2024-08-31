import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Db'
import '../Styles/Productdetail.css'
import { useDispatch } from 'react-redux'
import {   addToCart } from '../Redux/Createslice'

const ProductDetail = () => {
    const {title} = useParams()
    const product = products.find(p => p.title === decodeURIComponent(title));
    const dispatch = useDispatch();


    const handleAddToCart = () => {
        dispatch(addToCart(product));
      };
  return (
    <div className="container bg-scess d-flex align-items-center  justify-content-center my-5">
        <div className="detail-container">
            <div className="image-container">
                <img className='w-75' src={product.img} alt="" />
                <h3 className='fs-4 text-center my-2'>{product.title}</h3>
            </div>
            <div className="details d-flex align-items-center">
                <h3 className='text-danger mx-2 fs-4  text-decoration-line-through'>{product.prevPrice}</h3>
                <h3 className='text-success mx-2'>${product.newPrice}</h3>
            </div>
                <div className="star  fs-4">
                    <span className='fw-normal'>Rating <span className='text-warning'>★★★★</span></span>
                </div>
                <div className="review">{product.reviews}</div>
                <div className="div my-3 d-flex alignt-items-center  gap-5">
                    <h4 className='text-secondary fw-light fs-5'>Item color</h4>
                    <h4 className='fs-5'>{product.color}</h4>
                    <hr className='bg-secondary' />
                </div>
                <div className="brand my-3 d-flex align-items-center  gap-5">
                    <h4 className='text-secondary fw-light fs-5'>Brand name</h4>
                    <h4 className='fs-5'>{product.company}</h4>
                </div>
                <div className="categroy my-3 d-flex align-items-center  gap-5">
                    <h4 className='text-secondary fw-light fs-5'>Product Category</h4>
                    <h4 className='fs-5'>{product.category}</h4>
                </div>
                <div className="btn w-100">
                    <button className='w-100 bg-primary text-white' onClick={handleAddToCart}>Add to Cart</button>
                </div>
                
        </div>
    </div>
  )
}

export default ProductDetail