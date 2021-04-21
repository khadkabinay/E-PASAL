import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom'
import Message  from '../Components/Message'

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
            null
        }
        </>
    )
}

export default CartScreen
