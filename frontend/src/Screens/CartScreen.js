import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom'
import Message  from '../Components/Message'
import { Row, Col , Image, Form } from 'react-bootstrap'

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect( () => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }

    }, [dispatch, productId, qty])



    return (
        <>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (<Message> Your cart is empty</Message>): 
        (cartItems.map(item => (
            <Row key={item.product}>
                <Image src={item.image} />
                <Col md={2}>{item.name}</Col>
                <Col md={2}>{item.price}</Col>
                <Col>
                <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                </Form.Control>
                </Col>
            </Row>

        )  
        ))
        }
        </>
    )
}

export default CartScreen
