import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import { Container, Card, Image, Col, Row, Button, ListGroup, ListGroupItem, Form  } from 'react-bootstrap'

const ProductScreen = ({history, match }) => {
    const [qty, setQty]  = useState(1)
    const dispatch = useDispatch()
    
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
  
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }


    return (
        <div>
            {loading ? <h1>loading</h1> : <Container className='pt-3'>
            <Image src={product.image} />
            <Col>
                <Button><Link to='/'>Go Back</Link></Button>
                <Row>Name : {product.name}</Row>
                <Row>Description: {product.description}</Row>
                <Row>Price: {product.price}</Row>
            </Col>
            <Rating value={product.rating} text={`${product.numReviews} reveiews`} />
            <ListGroup>
            <ListGroupItem> price: {product.price}</ListGroupItem>
            <ListGroupItem>Status: {product.countInStock === 0 ? "Out Of Stock" : "In Stock"}</ListGroupItem>
            {product.countInStock > 0 && (
                <ListGroupItem>Qty: 
                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                    </Form.Control>
                </ListGroupItem>

            )}
            <Button onClick={addToCartHandler} disabled={product.countInStock === 0}>Add To Cart</Button>
            </ListGroup>
        </Container>
    }
        </div>
    )
}

export default ProductScreen
