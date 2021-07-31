import React from 'react';

const Scroll = (props)=>{
    return (
        <React.Fragment>
            <div style={{overflowY:'scroll', border: '1px solid #96ccff', height: '800px'}}>
                {props.children}
            </div>
        </React.Fragment>);
}
export default Scroll;