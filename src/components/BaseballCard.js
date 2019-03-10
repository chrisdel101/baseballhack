import React from 'react';
import queryString from 'query-string'

function BaseballCard(props){
    console.log(props)
    function renderData(props){
        if(props.image){
            return(
                <div className="image-card">
                    <img className='card-image' src={props.image} />
                </div>
            )
        } else {
            return(
                <div className="text-card">
                </div>
            )
        }
    }
    return(
        <div className="baseballcard">
            {renderData(props)}
        </div>
    )
}

export default BaseballCard
