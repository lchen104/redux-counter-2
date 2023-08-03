import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// // START REDUX
// import { createStore } from 'redux'
// // STORE -> globalized state

// // ACTION INCREMENT -> describes what we want to do
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // REDUCER -> action transform to next state
// const counter = (state = 0, action) => {

//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// // Display in console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH -> excutes the action
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import allReducer from './reducers'
import { Provider } from 'react-redux'


const store = createStore(
    allReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
