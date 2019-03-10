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



class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            listheading: ["Fourseam", "Sinker", "Slider", "Curve", "Slow Curve", "Change"]
        };
	}
	render() {
		return (
            <div className="page">
                <BaseballCard
                    image="/imgs/kershaw.png"
                    side="left"
                    listheading={this.state.listheading}
                    />
                <BaseballCard
                    showtext="true"
                    side="right"
                />
            </div>
		)
	}
}
export default Page;
