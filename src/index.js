import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.scss';
import App from './App';

// Redux
import {  Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );