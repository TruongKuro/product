import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
  const [product, setProduct]=useState({});
  const param= useParams();
  useEffect(()=>{
    const fetch=async()=> {
        const {data} = await axios.get('https://dummyjson.com/products/'+param.id);
        setProduct(data);
    }
    fetch();
});

  return (
    <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={product.thumbnail} width="250" /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            
                            <div className="mt-4 mb-3"> 
                                <h5 className="text-uppercase">{product.title}</h5>
                                <div className="price d-flex flex-row align-items-center"> 
                                    <div className="ml-2"> <div className="dis-price">${product.price}</div> 
                                    <div>{product.discountPercentage}% OFF</div> </div>
                                </div>
                            </div>
                            <div className="about">Rating: {product.rating}</div>
                            <div className="about">Brand: {product.brand}</div>
                            <p className="about">{product.description}</p>
                            <div className="sizes mt-5">
                            </div>
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
