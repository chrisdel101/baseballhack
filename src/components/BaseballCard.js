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
                    <table>
                        <tr>
                            <td>Fourseam</td>
                            <td>{props.stats.Fourseam}</td>
                        </tr>
                        <tr>
                            <td>Curve</td>
                            <td>{props.stats.Curve}</td>
                        </tr>
                        <tr>
                            <td>Slider</td>
                            <td>{props.stats.Slider}</td>
                        </tr>
                        <tr>
                            <td>Change</td>
                            <td>{props.stats.Change}</td>
                        </tr>
                    </table>
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
