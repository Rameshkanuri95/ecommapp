import React, { useEffect, useState } from "react"
import Loading from "./Loading"
import Product from "./Product"


const Cart = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    useProducts
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products")
      const json = await response.json()
      setProduct(json)
    }
    fetchData()
  }, [])

  return (
    <div className="container m-auto text-center">
      <h1 style={{ color: "#9e9ec1" }}>FAKE STORE API CART</h1>
      <div className="product--list" style={{ display: "" }}>
        {product.length === 0 ? (
          <Loading />
        ) : (
          product.map((item, index) => {
            return <Product key={index} product={item} />
          })
        )}
      </div>
    </div>
  )
}

export default Cart
