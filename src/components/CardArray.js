import React from 'react';
import Card from './Card.js';

const CardArray = ({robots})=>{

    if(robots.length===0){
        return (<p className="tc white mt-10">No result found</p>)
    }
    return(
        <div>
            {
                robots.map((user)=>{
                return <Card key={user.id} id={user.id} name={user.name} email = {user.email}/>;
                })
            }
        </div>

    );
};
export default CardArray;