import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DataForm from '../stepper/dataform/DataForm';
import ReviewForm from '../stepper/reviewform/ReviewForm';
import MapForm from '../stepper/mapform/MapForm';
import NavBar from '../../graphic interface/NavBar';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Grid from '@material-ui/core/Grid';

const NewRouteForm = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <NavBar />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <FilterHdrIcon fontSize="large" />
                    </Avatar>

                    <Typography component="h1" variant="h4" align="center">
                        Create your own route
                    </Typography>

                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Grid container className={classes.grid}>
                                    <Grid item xs={12} sm={2}>
                                        <DirectionsWalkIcon className={classes.icon} fontSize="large" style={{ fill: "orange" }} />
                                    </Grid>
                                    <Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h5" gutterBottom>
                                                Route created
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">
                                                Your new track was succesfully created and saved
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    )
}

const steps = ['Basic data', 'Map', 'Review your route'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <DataForm />;
        case 1:
            return <MapForm />;
        case 2:
            return <ReviewForm />;
        default:
            throw new Error('Unknown step');
    }
}

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.warning.main,
    },
    icon: {
        width: 65,
        height: 65,
    },
    grid: {
        marginLeft: theme.spacing(2),
    }
}));

export default NewRouteForm