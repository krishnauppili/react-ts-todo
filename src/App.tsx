import * as React from 'react';
import {Component} from "react";
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/';
import { StoreState } from './types/';

const store = createStore<StoreState,any,any,any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

class App extends Component {
   render() {
    return (
        <Provider store={store}>
            <Hello />
        </Provider>
    );
  }
}

export default App;
