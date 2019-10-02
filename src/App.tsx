import * as React from 'react';
import {Component} from "react";
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from "./store/Root/reducer";
import {Provider} from "react-redux";
import TodoLists from "./Views/TodoList";
import RootSaga from "./store/Root/sagas";
import "./App.css";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

class App extends Component {
   render() {
    return (
        <Provider store={store}>
            <TodoLists/>
        </Provider>
    );
  }
}

export default App;