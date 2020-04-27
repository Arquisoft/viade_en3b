import React, { Component } from 'react';
//import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
//import FormLabel from '@material-ui/core/FormLabel';
//import FormControl from '@material-ui/core/FormControl';
//import FormGroup from '@material-ui/core/FormGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import { podHandler } from '../../../parser/PodHandler';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../graphic interface/NavBar';
import Avatar from '@material-ui/core/Avatar';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import GroupOfFriends from '../../../entities/GroupOfFriends.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
//import Checkbox from '@material-ui/core/Checkbox';
//import IconButton from '@material-ui/core/IconButton';
//import CommentIcon from '@material-ui/icons/Comment';

//import FriendsCard from '../../graphic interface/FriendsCard'

export class CreateGroupForm extends Component{

    constructor(){
        super();
        this.group = null;
        this.state = {
            name : '',
            friends : []
        };
    }

    useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        formControl: {
          margin: theme.spacing(3),
        },
      }));

    changeName = (event) => {

        this.setState({name : event.target.value});

    }

    makeGroup = () => {         

            let name = this.state.name;
            let friends = this.state.friends;
            //let group = new GroupOfFriends(name, friends);
            //this.storeGroup(group);
            new GroupOfFriends(name, friends).storeInPod();

    };

   // storeGroup = (group) => {

    //    podHandler.storeGroup(group)

   // }

/*    childrenTrimmed = (item) =>        

        <List
            
            label = {`${item}`.split('.')[0].split('//')[1]}
            onClick={this.state.friends.push(item)}
        />;
        

    showFriends = (friend) =>
        <ListItem role={undefined} dense button onClick={console.log("clicked over friend")}>
            
            <Checkbox
                edge="start"
               
                tabIndex={-1}
                disableRipple
                
            />
            <ListItemText primary={`${friend}`} />
            
        </ListItem>
    ; */


    childrenTrimmed = (item, index) =>
    <ListItem role={undefined} dense button onClick={console.log("clicked over friend")}>
    <ListItemText className={useStyles().pos} color="textSecondary"
      align = "left" key={index}>
        <a href = {item}>
            {`${item}`.split('.')[0].split('//')[1]}
        </a>
    </ListItemText>
    </ListItem>;

    render(){

        const { classes } = this.props;

        
        /* const classes = this.useStyles();
        const [checked, setChecked] = React.useState(false);

        const changeFriends = (event) => {

            setChecked(event.target.checked);
            this.setState({friends : event.target.value}); 
            
        } 

        const childrenTrimmed = (item) =>        

            <Checkbox
                checked={checked}
                value = {this.state.friends}
                label = {`${item}`.split('.')[0].split('//')[1]}
                onChange={changeFriends}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />; */

        

        return(

            <MuiThemeProvider>
                <React.Fragment>
                    <NavBar />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <SupervisedUserCircleIcon fontSize="large" />
                            </Avatar>

                            <Typography component="h1" variant="h4" align="center">
                                Create a new group of friends
                            </Typography>
                            
                                                   
                            <form className={classes.root} noValidate autoComplete="off">
                          
                                <TextField required id="standard-required" label="Name" defaultValue="" />
                                   
                                <List src="user.friends">
                                Pick a few friends!
                                {this.childrenTrimmed}
                                </List>

                                <Button variant="contained" size="medium" color="primary" onClick={/*this.makeGroup*/ console.log("group created click")} className={classes.margin}>
                                    Create
                                </Button>

                            </form>                            
                           
                        </Paper>
                    </main>
                </React.Fragment>
            </MuiThemeProvider>

            /*
             <React.Fragment>
                                {this.childrenTrimmed}
                            </React.Fragment>
                            
            /* <React.Fragment>
                <h2>
                    Create a new group of friends
                </h2>
                <form>
                    <label>
                        Name: 
                        <input type="text" value={this.state.name} onChange={this.changeName} />
                    </label>
                    <FormControl component="fieldset" className={this.useStyles().formControl}>
                        <FormLabel component="legend">Friends in your POD</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                friends = {this.childrenTrimmed}
                            />          
                        </FormGroup>
                    </FormControl>
                </form>
                <button onClick={this.makeGroup}>Create</button>
            </React.Fragment> */
        );
    }

}

const useStyles = (theme) => ({
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
});


export default withStyles(useStyles)(CreateGroupForm);