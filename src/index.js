import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

/*
redux
 */
const increment = { type: 'INCREMENT' }
const decrement = { type: 'DECREMENT' }
const reducer = (state=0, action) => {
  if (action.type === 'INCREMENT') {
    return ++state;
  }
  if (action.type === 'DECREMENT') {
    return --state;
  }
  return state;
}
const store = createStore(reducer);
console.log('before -> ', store.getState());
store.dispatch(increment);
console.log('after -> ', store.getState());
console.log('before -> ', store.getState());
store.dispatch(decrement);
console.log('after -> ', store.getState());

/*
react component
 */
const App = () => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);