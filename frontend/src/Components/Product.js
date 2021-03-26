import React from 'react'
import { Card } from 'react-bootstrap'

const Product = (props) => {
    return (
        <>
        <Card>
            <Card.Img varient='top' src={props.product.image}/>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>{props.product.rating} from {props.product.numReviews} reviews</Card.Text>
            <Card.Text>{props.product.price}</Card.Text>
        </Card>
        </>
    )
}

export default Product
