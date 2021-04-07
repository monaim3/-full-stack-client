import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    console.log(props.cart)
   
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        console.log(product.price , product.quantity);
        total = total + product.price * product.quantity || 1;
    }
   
    

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            
            <p>Total Price: {total}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;