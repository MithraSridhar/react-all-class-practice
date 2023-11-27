import React, { useState } from 'react'

function UpdateProduct() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 30 }
    ])


    console.log(products)

    const handleDelete = (productId) => {
        let updatedProducts = products.filter((product) => product.id !== productId)
        setProducts(updatedProducts)
    }


    const handleUpdate = (updatedProductsData) => {
        let updatedData = products.map((product) => {
            let updatedProductData = updatedProductsData.find((updatedProduct) => updatedProduct.id === product.id)
            console.log("updatedProductData", updatedProductData)

            return updatedProductData;
        })
        console.log("updatedData", updatedData)
        setProducts(updatedData)
    }




    return (
        <div><h1>Update & Delete Product</h1>
            <ul>
                {products.map((product) => (
                    <li>{product.name} - Rs.{product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>

                ))}
            </ul>
            <button onClick={() => handleUpdate([
                { id: 1, name: "Updated Product 1", price: 50 },
                { id: 2, name: "Updated Product 2", price: 70 }
            ])}>Update Products</button>
        </div>
    )
}

export default UpdateProduct