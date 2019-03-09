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
import BaseballCard from '../components/card'



class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
            <div className="page">
                <BaseballCard
                    override="true"
                    rootstyle={{
                        padding: 0,
                    margin: 0}}
                    image="https://securea.mlb.com/mlb/images/players/head_shot/592885.jpg"
                    side="left"
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
