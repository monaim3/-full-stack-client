import React from 'react';

const OrderedItem = (props) => {
    console.log(props);
    const {  price, quantity,  key, name } = props.product;

   
    return (
        <div className="container col-md-12 d-flex justify-content-between border-bottom ">
            <p className="col-md-3">{name}</p>
            <p className="col-md-3">1</p>
            <p className="col-md-3"> $ {price}</p>
            <button
                className="btn btn-dark col-md-3"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
       
    );
};

export default OrderedItem;