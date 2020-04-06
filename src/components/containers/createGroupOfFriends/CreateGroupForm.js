import React, { Component } from 'react';

export class CreateGroupForm extends Component{

    constructor(){
        super();
        this.group = null;
        this.state = {
            name : '',
            friends : []
        };
    }

    changeName = (newName) => {
        this.setState({name : newName});
    }

    changeFriends = (newFriends) => {
        this.setState({friends : newFriends});
    }

    render(){
        const { name, friends } = this.state;
        const values = { name, friends };
        return(
            "this str is to get rid of the error for commiting, dont worry"
        );
    }

}