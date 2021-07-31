import React from 'react';
//Basic card component
const Card = ({id,name,email})=>{
    return(
        <div className="bg-light-green tc grow pointer br3 bw2 dib pa3 ma3 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt='Robot'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;