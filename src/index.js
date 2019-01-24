import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(reducer);

const app = (
    // wrap project with providers for Redux access
    <Provider store={store}>
    {/* TODO: Routing (BrowserRouter? or Node) */}
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
