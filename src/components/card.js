import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Text from '/Users/chrisdielschnieder/desktop/code_work/baseballHack/baseballhack/src/components/TextTable.js';
import queryString from 'query-string'


const styles = {
  card: {
      minWidth: 275,
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
  left: {
   padding: 0,
   margin: 0
},
 right: {
     display: "grid",
     gridTemplateColumns: "50% 50%",
     gridTemplateRows: "repeat(6, 1fr)"
 }
};

function SimpleCard(props) {

  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  // console.log(props.listheading)

  const parsed = queryString.parse(window.location.search);
  console.log(parsed)

  return (
    <Card className={`card ${props.side === 'left' ? 'left' : 'right'}`}
    classes={ props.side === 'left' ? {root: classes.left} : {root: classes.right}}>

      {
          ["Fourseam", "Sinker", "Slider", "Curve", "Change"].map((heading,i) => {
              if(props.showtext === 'true'){
                 return <React.Fragment>
                  <CardContent className="left-side" key={i}>
                    <Text classes={styles} listheading={heading}/>
                  </CardContent>

                  <CardContent className="right-side" key={i}>
                    <Text classes={styles} listheading={parsed[heading]}/>
                  </CardContent>
                  </React.Fragment>

              } else {
                return   null
              }

          })

      }


      <CardActions className="player-box">
        <div className="player-name">{decodeURI(parsed['name'])}</div>
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
