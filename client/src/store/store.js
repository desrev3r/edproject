import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const composeEnhancers = composeWithDevTools({});

const initialState = {
  user: {
    loggedIn: false,
    name: 'Гость',
    avatar: 'https://lovely-mebel.ru/template/img/default_avatar.png',
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
