import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import { Container, Card, Image, Col, Row, Button, ListGroup, ListGroupItem  } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch()
    
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
  
    }, [dispatch, match])

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
            <Button disabled={product.countInStock === 0}><Link to='/' >Add To Cart</Link></Button>
            </ListGroup>
        </Container>
    }
        </div>
    )
}

export default ProductScreen
