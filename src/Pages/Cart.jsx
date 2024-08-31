import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container my-4">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <img className='w-25' src={item.img} alt="" />
              <span>{item.title}</span>
              <span>${item.newPrice}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
