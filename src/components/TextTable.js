import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import queryString from 'query-string'


function TextTable(props){
    let {classes} = props

    const parsed = queryString.parse(window.location.search);
    console.log(parsed)
    return(
        <div className={`text-table ${props.side === "left" ? "left-side" : "right-side"}`}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            </Typography>
            <Typography variant="h5" component="h2">
            {props.listheading}
            </Typography>
        </div>
    )
}

export default TextTable
