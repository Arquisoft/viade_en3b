import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 50,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          friends: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          activities: 
        </Typography>
        <Divider />
        <Typography className={classes.pos} color="textSecondary">
          My last activity: 
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}