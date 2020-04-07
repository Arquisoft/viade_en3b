import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { podHandler } from '../../../parser/PodHandler';
import GroupOfFriends from '../../../entities/GroupOfFriends.js';

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

    storeGroup = (group) => {

        podHandler.storeGroup(group)

    }

    render(){

        const classes = this.useStyles();
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
            />;

        return(
            <React.Fragment>
                <h2>
                    Create a new group of friends
                </h2>
                <form>
                    <label>
                        Name: 
                        <input type="text" value={this.state.name} onChange={this.changeName} />
                    </label>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Friends in your POD</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                friends = {childrenTrimmed}
                            />          
                        </FormGroup>
                    </FormControl>
                </form>
                <button onClick={this.makeGroup}>Create</button>
            </React.Fragment>
        );
    }

}