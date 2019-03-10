import React from 'react';
import queryString from 'query-string'

function BaseballCard(props){
    console.log(props)
    function renderData(props){
        if(props.image){
            return(
                <div className="image-card">
                    <div className="image-container">
                        <img className='card-image' src={props.image} />
                        <div className="player-name">
                        <strong>CLAYTON KERSHAW</strong>
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
                        <td>{props.stats.Curve}</td>
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
                        <tr>
                            <td>Slowcurve</td>
                            <td>{props.stats.Slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Slowcurve</td>
                            <td>{props.stats.Slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Slowcurve</td>
                            <td>{props.stats.Slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.Slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.Slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.Slowcurve}</td>
                        </tr>
                        <tr>
                            <td>Stat</td>
                            <td>{props.stats.Slowcurve}</td>
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
