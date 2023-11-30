import React from 'react';

function CartItem({product}){
    return (
        <div className="product-container">
        <img className='product-poster' src={product.poster} alt={product.name} />
        <div className='product-spec'>
          <h2 className='product-name'>{product.name} - {product.id}</h2>
          <p className='product-rating'>⭐{product.rating}</p>
        </div>
        <h3 className='product-price'>Price:  {product.price}</h3>
       
        <p className='product-summary'>{product.summary}</p>
      
      
      </div>
    );
};

export default CartItem;