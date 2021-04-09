import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'
import Loader from '../Components/Loader'
import Message from '../Components/Message'



const HomeScreen = () => {
        const dispatch = useDispatch()
        const productList = useSelector(state => state.productList)
        const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <>
        <h2>Latest Products</h2>
        { loading ? <Loader /> : error ? <Message >{error}</Message> :
        <Row>
        {products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
        ))}
        </Row>}
        </>
    )
}

export default HomeScreen
