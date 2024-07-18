import React from "react"

const Product = ({ product }) => {
  const { image, price, description, title } = product
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: {price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  )
}

export default Product
