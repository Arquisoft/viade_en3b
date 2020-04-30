import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapSnapshot from '../map/MapSnapshot.js'
import Button from '@material-ui/core/Button';
import { Link, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    marginBottom: '2vh',
    marginTop: '2vh',
    background: '#f7f7f7'
  },
  pos: {
    // marginBottom: 12,
    // marginTop: 12,
    color: 'black'
  },
  link: {
    // marginBottom: 20,
    // marginTop: 10,
  },
});

export default function MyRouteCard(props) {
  const classes = useStyles();
  // console.log(props.route);
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <MapSnapshot route={props.route}></MapSnapshot>
          </Grid>

          <Grid item xs={12} >
            <Link underline='none' href={"#/RouteDetails/" + props.route.getId()}>
              <Typography data-testid="name" className={classes.link} variant="h5" component="h2">
                {props.route.getName()}
              </Typography>
            </Link>
          </Grid>
          {props.route.getDate().toDateString()!="Invalid Date"&&
          <Grid item xs={12} sm={5}>
            <Typography data-testid="date"  className={classes.pos} color="textSecondary">
              {props.route.getDate().toDateString()}
            </Typography>
          </Grid>}

          <Grid item xs={12} sm={5}>
            <Typography data-testid="dtc"  className={classes.pos} color="textSecondary">
              {Math.round(props.route.getTotalDistance()*1000)/1000} Km
            </Typography>
          </Grid>

          <Button data-testid="btn" variant='outlined'
            // style={{ color: 'white', background: 'black' }} 
            href={"#/RouteDetails/" + props.route.getId()}
            color="inherit"
            style={{marginLeft:'auto', marginRight:'auto'}}>
            Details
          </Button>

        </Grid>
      </CardContent>
    </Card >
  );
}