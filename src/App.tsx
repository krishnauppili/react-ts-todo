import * as React from 'react';
import {Component} from "react";
// import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/';
import { StoreState } from './types/';

const store = createStore<StoreState,any,any,any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

class App extends Component {
   render() {
    return (
        <div>
            Reached app
        </div>
    );
  }
}

export default App;