import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../title/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 2,
  },
  container:{
    paddingBottom:"10%"
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Title>Total Views</Title>
        <Typography component="p" variant="h5">
          55
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          Today
        </Typography>
      </div>
      <div>
        <Title>Total Views</Title>
        <Typography component="p" variant="h5">
          5125
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          Till Date
        </Typography>
      </div>
    </React.Fragment>
  );
}