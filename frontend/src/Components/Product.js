import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
    return (
        <>
        <Card className='my-3 p-3'>
            <Card.Img varient='top' src={props.product.image}/>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
                <Rating 
                value={props.product.rating}
                text={`${props.product.numReviews} reviews`}
                />
            </Card.Text>
            <Card.Text as='h4' >{props.product.price}</Card.Text>
        </Card>
        </>
    )
}

export default Product
