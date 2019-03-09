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


function TextTable(props){
    let {classes} = props
    return(
        <div className="text-table">
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            Baseball World
            </Typography>
            <Typography variant="h5" component="h2">
            Some Guy
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            A Rando Team
            </Typography>
            <Typography component="p">
            lorem ipsum etc.
            <br />
            {'"a benevolent smile"'}
            </Typography>

        </div>
    )
}

export default TextTable
