import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ElevationGraph from "./ElevationGraph"
import DetailsMap from '../map/DetailsMap.js';
import MediaTabBar from "./MediaTabBar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function RouteDetails(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      console.log(props.route);

    return (
        <div>
            <Grid container className={classes.root} spacing={2}  direction="column" justify="center" alignItems="center">
                <Grid  item container className={classes.root} xs={10} spacing={2}  direction="column" justify="center" alignItems="center">
                    <Grid  item container className={classes.root} spacing={2} direction="column" justify="center" alignItems="center">
                        <Grid item xs={12} className={classes.root}>
                            <Typography data-testid="name" variant="h4">
                                {props.route.getName()}
                            </Typography>
                        </Grid>
                        <Grid item container className={classes.root} spacing={3} xs={12}>
                            <Grid item xs={8} >
                                <Grid container className={classes.root} spacing={1} direction="column" >
                                    <Grid item>
                                        <DetailsMap data-testid="map" route={props.route}></DetailsMap>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <ElevationGraph  data ={props.route.getRouteElements()}></ElevationGraph>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Card elevation={5} className={classes.root}>
                                    <CardContent>
                                        <Grid item container className={classes.root} spacing={2} direction="column" >
                                            {props.route.getDate().toDateString()!="Invalid Date"&&
                                            <Grid item>
                                                <Typography className={classes.pos} data-testid="date">
                                                    Date: {props.route.getDate().toDateString()}
                                                </Typography>
                                            </Grid>}
                                            <Grid item container spacing={1}>
                                                <Grid item xs={6} data-testid="dtc">
                                                    Distance: {Math.round(props.route.getTotalDistance()*1000)/1000} Km
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.pos} data-testid="description" >
                                                    Description: {props.route.getDescription()}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <MediaTabBar route={props.route} ></MediaTabBar>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        
    );
}

