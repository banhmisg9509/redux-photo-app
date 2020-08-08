import store from 'app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SimpleReactLightbox from "simple-react-lightbox";
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
