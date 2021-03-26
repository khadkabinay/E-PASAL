import React from 'react'
import products from '../products'
import Product from '../Components/Product'


const HomeScreen = () => {

    return (
        <>
        {products.map(product =>(
            <Product product={product} />
        ))}
        </>
    )
}

export default HomeScreen
