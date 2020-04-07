import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ElevationGraph from "./ElevationGraph"

import DetailsMap from '../map/DetailsMap.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function RouteDetails(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid  item container className={classes.root} spacing={2} direction="column" justify="center" alignItems="center">
                <Grid  item container className={classes.root} spacing={2} direction="column" justify="center" alignItems="center">
                    <Grid item xs={12} className={classes.root}>
                        <Typography variant="h4">
                            {props.route.getName()}
                        </Typography>
                    </Grid>
                    <Grid item container className={classes.root} spacing={3} xs={12}>
                        <Grid item container className={classes.root} xs={8} spacing={2} direction="column" >
                            <Grid item>
                                <DetailsMap route={props.route}></DetailsMap>
                            </Grid>
                            <Grid item>
                                <ElevationGraph data ={props.route.getRouteElements()}></ElevationGraph>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.root} spacing={2} xs={4} direction="column" >
                            <Grid item>
                                <Typography className={classes.pos} >
                                    Date: {props.route.getDate()}
                                </Typography>
                            </Grid>
                            <Grid item container spacing={1}>
                                <Grid item xs={6}>
                                    Distance: {props.route.getTotalDistance()}
                                </Grid>
                                <Grid item xs={6}>
                                    Time: {props.route.getTime()}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.pos} >
                                    Description:
                                </Typography>
                                <Typography className={classes.pos} >
                                    {props.route.getDescription()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    Comentarios/media
                </Grid>
            </Grid>
        </div>
        
    );
}