import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [img, setImageURL] = useState({});

    const handleImageUpload = event => {
        
        const imageData = new FormData();
        imageData.set('key', '51e0ee40006994fc21dafaa450445f33');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imageData)
            .then(function (response) {
                
                setImageURL(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onSubmit = data => {
        const productData = {
            name: data.name,
             
            weight: data.weight,
            img: img,
            price: data.price,
            key: data.key
        }
    
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Product has been added successfully')
                }
            })

     }

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4">
               <div className="rock">
               <h3>Add Product</h3>
               </div>
            </div>
            <div className="col-md-8">
            <div className=" d-flex justify-content-center text-center">
                <form className="" action="" onSubmit={handleSubmit(onSubmit)}>
                    <label className="col-form-label"><b>Product Name :</b></label>
                    <input className="form-control " name="name" placeholder="Enter product name" defaultValue="" ref={register({ required: true })} />
                    {errors.title && <span className="error">Name is required</span>}
                    
                    {/* <label className="col-form-label"><b>Product Description :</b></label>
                    <input className="form-control" name="description" placeholder="Enter product Description" defaultValue="" ref={register({ required: true })} />
                    {errors.description && <span className="error">Description is required</span>} */}
                    
                    <label className="col-form-label"><b>Product Price :</b></label>
                    <input className="form-control" name="price" placeholder="Enter product price" defaultValue="" ref={register({ required: true })} />
                    {errors.price && <span className="error">Price is required</span>}
  
                    
                  
                    <label className="col-form-label"><b>Product No :</b></label>
                    <input className="form-control" name="key" defaultValue="" placeholder="Enter product No." ref={register({ required: true })} />
                    {errors.key && <span className="error">**Product No. is required to show your products on UI**</span>}
                    <br />
                    <label className="col-form-label"><b>Upload Product Image :</b></label>
                    <input className="form-control" name="img" placeholder="Upload Image" type="file" onChange={handleImageUpload} />
                    {errors.img&& <span className="error">Image is required</span>}
                    
                    <button className="btn btn-success" type="submit">Save</button>
                </form>
            </div>

            </div>
        </div>
           
        </div>
    );
};

export default Admin;