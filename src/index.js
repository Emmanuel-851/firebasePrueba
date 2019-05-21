import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp(
    {
        apiKey: "AIzaSyAtPtT0H7MWHub51l640xwrR_nWlA4uN_I",
    authDomain: "prestamos851.firebaseapp.com",
    databaseURL: "https://prestamos851.firebaseio.com",
    projectId: "prestamos851",
    storageBucket: "prestamos851.appspot.com",
    messagingSenderId: "902175140313",
    appId: "1:902175140313:web:012c97856ba32568"
    }
)

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
