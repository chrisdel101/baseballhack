import React from 'react';


function TextTable(){
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
