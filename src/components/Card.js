import React, {Component} from 'react';


//burada class yapmayacagiz function yazacagiz
//2.not// Card = (props) => {      yerine destructuring
	const Card = ({username,name,email,id}) => {
	//2.Not alt satirdaki name,email,id degiskenlerini yukari tasiyabiliriz..
	//1.not ES6'dan hatirla props.email,props.name,props.id yerine soyle yazabiliriz;
	//2.not// const {name, email, id} = props;
	//1.not o zaman asagida props.name yerine sadece name -- props.email yerine email yazariz
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
			    <h2>{id}</h2>
				<h2>{name}</h2>
				<h2>{username}</h2>
				<p>{"email:" + email}</p>
			</div>
		</div> 
	);
}
export default Card;