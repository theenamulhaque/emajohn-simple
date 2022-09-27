import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h1>Order Summery</h1>
                <p>Selected Items: {cart.length} </p>
        </div>
    );
};

export default Cart;