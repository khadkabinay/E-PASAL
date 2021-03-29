import React from 'react'
import products from '../products'
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import { Container, Card, Image, Col, Row, Button, ListGroup, ListGroupItem  } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)
    return (
        <div>
        <Container className='pt-3'>

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
            <Button disabled={product.countInStock === 0}><Link to='/' >Add To Cart</Link></Button>
            </ListGroup>
        </Container>
        </div>
    )
}

export default ProductScreen
