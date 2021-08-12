import React from 'react';
import Card from './Card.js';
import { CircularProgress } from '@material-ui/core/index.js';

const CardArray = ({robots, isPending, error})=>{
    if(error !== ''){
        return (<p className="tc white mt-10">Couldn't connect to the server. Please check your internet connection </p>)
    }

    else if(!isPending & robots.length===0){
        return (<p className="tc white mt-10">No result found</p>)
    }
    return isPending? (<div className="center"> <CircularProgress color="secondary" /></div>):(
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