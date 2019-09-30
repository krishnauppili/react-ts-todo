import * as React from 'react';
import {Component} from "react";
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from "./store/Root/reducer";
import {Provider} from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));

class App extends Component {
   render() {
    return (
        <Provider store={store}>
            <div>
                Reached store
            </div>
        </Provider>
    );
  }
}

export default App;