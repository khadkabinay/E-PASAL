import React from 'react'
import { Card } from 'react-bootstrap'

const Product = (props) => {
    return (
        <>
        <Card>
            {props.product.name}
        </Card>
        </>
    )
}

export default Product
