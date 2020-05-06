import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const composeEnhancers = composeWithDevTools({});

const initialState = {
  loading: false,
  profile: {name: 'John'},
};

const middleware = [thunk];  

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
