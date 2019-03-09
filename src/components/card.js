import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
  root: {
   padding: 0,
   margin: 0
 }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={`card`}
    classes={
        {
        root: classes.root
        }
  }>
      <CardContent>

      </CardContent>
      <CardActions>
        <img className="card-image" src={props.image}/>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

//
// <Typography className={classes.title} color="textSecondary" gutterBottom>
// Baseball World
// </Typography>
// <Typography variant="h5" component="h2">
//   Some Guy
// </Typography>
// <Typography className={classes.pos} color="textSecondary">
//   A Rando Team
// </Typography>
// <Typography component="p">
//   lorem ipsum etc.
//   <br />
//   {'"a benevolent smile"'}
// </Typography>
