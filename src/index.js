import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import { usePromiseTracker } from "react-promise-tracker";
// import Spinner from './todo/Spinner'
import {store} from './store/createStore'
import {Provider} from 'react-redux';
import  getTodosRequest from './todo/actions/getTodoActions';
// const LoadingIndicator = props => {
//   const { promiseInProgress } = usePromiseTracker();

//   return <div>
//    { promiseInProgress && <Spinner />}
//     </div>
// };
store.dispatch(getTodosRequest())
ReactDOM.render(
  <Provider store={store}>
    <App />
   
    {/* <LoadingIndicator /> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
