import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/reducer'

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware()));