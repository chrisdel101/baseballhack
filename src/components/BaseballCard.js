import React from 'react';
import queryString from 'query-string'

function BaseballCard(props){
    console.log(props)
    function renderData(props){
        if(props.image){
            return(
                <div className="image-card">
                    <div className="image-container">
                        <i className={`team-font bbclub-${props.stats.team}`}></i>
                        <img className='card-image' src={props.image} />
                        <i className="team-font mlb bbclub-mlb"></i>
                        <div className="player-name">
                            <strong>{props.stats.name}</strong>
                        </div>
                    </div>

                </div>
            )
        } else {
            return(
                <div className="text-card">
                    <table>
                        <tbody>
                        <tr>
                        <td>Fourseam</td>
                        <td>{props.stats.curve}</td>
                        </tr>
                        <tr>
                            <td>Curve</td>
                            <td>{props.stats.curve}</td>
                        </tr>
                        <tr>
                            <td>Slider</td>
                            <td>{props.stats.slider}</td>
                        </tr>
                        <tr>
                            <td>Change</td>
                            <td>{props.stats.change}</td>
                        </tr>
                        <tr>
                            <td>Slowcurve</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Slowcurve</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Slowcurve</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.slowcurve}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
    return(
        <div className={`baseballcard ${props.image  ? 'image-card' : ''}`}>
            {renderData(props)}
        </div>
    )
}

export default BaseballCard
