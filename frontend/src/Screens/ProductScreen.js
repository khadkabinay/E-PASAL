import React from 'react'
import products from '../products'
import Rating from '../Components/Rating'
import { Card, Image, Col, Row, Button, ListGroup, ListGroupItem  } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)
    return (
        <div>
            <h1>product</h1>
        </div>
    )
}

export default ProductScreen
