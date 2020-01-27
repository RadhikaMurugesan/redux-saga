import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/Reducers'
import rootSaga from './sagas/saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));


