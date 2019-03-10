import React from "react";
import ReactDOM from 'react-dom';
import '../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BaseballCard from '../components/BaseballCard'
import queryString from 'query-string'



class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            listheading: ["Fourseam", "Sinker", "Slider", "Curve", "Slow Curve", "Change"]
        };
	}
    parseQueryStr(){
        const parse = queryString.parse(window.location.search)
        return parse
    }
	render() {
        
		return (
            <div className="page">
                <BaseballCard
                    image="https://securea.mlb.com/mlb/images/players/head_shot/477132.jpg"
                    />
                <BaseballCard
                    stats={this.parseQueryStr()}
                />
            </div>
		)
	}
}
export default Page;
