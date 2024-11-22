import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

export default function Item({product}) {
  return (
    <Link to={`/product/${product.id}`} className="no-underline">

        <div className="p-4">
          <div className="card">
            <img src={product.thumbnail} className="card-img-top" alt={product.title}/>
            <div className="card-body">
              <h5 className="card-title h-title">{product.title}</h5>
              <h5 className="card-title">{product.price} $</h5>
            </div>
          </div>
        </div>
    </Link>
  )
}
