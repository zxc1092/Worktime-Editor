import { configureStore } from '@reduxjs/toolkit'
import checkoutReducer from './reducer/checkout' 

export default configureStore({
    reducer: {
        checkout: checkoutReducer
    }
})