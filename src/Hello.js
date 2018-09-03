import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
render(){
	return (
		<div className='f1 tc'>
		<h1>Hello Cetin</h1>
		<p>{this.props.selamlar}</p>
		<br/>
		<button type="button" className="btn btn-danger">Dugmeye Bas</button>
		</div>
	);
  }
}
export default Hello;

