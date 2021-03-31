import React from 'react'
import { useState , useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'


const HomeScreen = () => {
    const [products , setProducts ]  = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            axios.get('/API/product').then(res => (
                setProducts(res.data)
                ))

        }

    fetchProducts()
    }, []
    )
    return (
        <>
        <h2>Latest Products</h2>
        <Row>
        {products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
        ))}
        </Row>
        </>
    )
}

export default HomeScreen
