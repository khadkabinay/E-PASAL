import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer , productDetailsReducer} from '../src/reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})


const initialState = {}

let middleware = [thunk]

const store = createStore( reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


 export default store 