import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import product from './reducers/products'
import thunk from 'redux-thunk'
import loader from './reducers/loader'

const reducer = combineReducers({
    product: product,
    loader: loader
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))