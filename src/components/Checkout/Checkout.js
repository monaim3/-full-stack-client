import React from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Checkout = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    // console.log('form submitted', data)
    const savedCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser, products: savedCart, checkout: data, orderTime: new Date() };

    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          processOrder();
          alert('your order has been placed successfully');

        }
      })
  };

  console.log(watch("example")); 

  return (
    <div className="container d-flex justify-content-center text-center">
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}

        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
        {errors.email && <span className="error">Email is required</span>}

        <input name="address" ref={register({ required: true })} placeholder="Your Address" />
        {errors.address && <span className="error">Address is required</span>}

        <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
        {errors.phone && <span className="error">Phone Number is required</span>}

        <button className="btn btn-primary mt-4" type="submit">Place Order</button>
        
      </form>
    </div>
  );
};

export default Checkout;