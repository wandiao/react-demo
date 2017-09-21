import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from './middleware';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(axiosMiddleware, thunk));

export default store;