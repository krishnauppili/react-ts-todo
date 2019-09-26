import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from "./components/Hello/Hello";

ReactDOM.render(
    <Hello name="TypeScript" enthusiasmLevel={1} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();