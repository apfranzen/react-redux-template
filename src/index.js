import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'
import store from './store'
import { increment, decrement } from './actions'

/*
  -- alternate method of importing (for only 1 action) --
  import increment from './actions'
*/

const render = () => {
  ReactDOM.render(
    <App
      value={ store.getState() }
      onIncrement={ () => store.dispatch(increment)}
      onDecrement={ () => store.dispatch(decrement)}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();