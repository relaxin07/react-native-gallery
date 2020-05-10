import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import postReducer from './reducers/posts'

const rootReducer = combineReducers({
  postState: postReducer,
})

export default configureStore({ reducer: rootReducer })
