import React from 'react';
import Card from '../components/Card';

const CardList = ({ robots }) => 
{	
	return (
		<div>
			{
			 robots.map((robotjsdekielemanlar,i) => {
				return  (
					<Card 
						key={i} 
						id={robots[i].id} 
						//username={robots[i].username} 
						name={robots[i].name} 
						email={robots[i].email} 
					/>
				); 
			  })
			}
		</div>
	);
}
export default CardList;