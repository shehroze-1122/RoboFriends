import React from 'react';


const SearchBox = ({searchChange})=>{
    return(
        <React.Fragment>
            <div className="pa3">
             <input className="pa2 bg-light-blue ba b--blue br2" type="search" placeholder="Search your Robot Friends" onChange={searchChange}/>
            </div>
        </React.Fragment>
    );
}

export default SearchBox;