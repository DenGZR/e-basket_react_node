import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './root-reducers';
import callApi from './../utils/apiCaller'

export const history = createHistory()
const initialState = {}
const enhancers = []
const middleware = [
  thunk.withExtraArgument(callApi),
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const configureStore = () => {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  )
};

export default configureStore;