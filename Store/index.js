import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/Auth'

export default configureStore({
  reducer: {
    auth: authReducer,
  }
})