import React from 'react';
//We have learned props'state and now children
//Scroll can use children which is <CardList robots = {filteredRobots} />

const Scroll = (props) => {
    //return props.children
    return (
    	<div style={{ overflowY: 'scroll', border:'5px solid black' , height:'500px' }}>
    	{props.children}
    	</div>
    	)
};

export default Scroll;