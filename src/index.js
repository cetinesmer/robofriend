import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello';
//import Card from './Card'; //Card.js calisacak diyor 
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Yukaridaki satirlari actigimda bootstrap css calisir 

//ReactDOM.render(<Hello selamlar={'Merhaba' + ' React Ogrencisi' + ' Imgecik'} />, document.getElementById('root'));
//Yukaridaki DOM Hello.js'i ilk sayfa olarak gosteriyordu.Simdi Card componenet'ini yazacagiz.
ReactDOM.render(
	<App />, document.getElementById('root')
	);

registerServiceWorker();

