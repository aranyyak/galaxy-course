import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((num,prd)=>num+prd.price,0); 
    return (
        <div>
            <h4>course added: {cart.length}</h4>
            <h5>total price: {total}</h5>
        </div>
    );
};

export default Cart;