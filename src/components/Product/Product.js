import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {category, name, seller, price, ratings, img} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
                <div className='product-info'>
                    <h2>{name}</h2>
                    <h3>Price: $ {price} </h3>
                    <p>{seller}</p>
                    <p>{ratings} Ratings</p>
                    <p>{category}</p>
                </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;