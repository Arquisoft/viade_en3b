import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List } from '@solid/react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

import storeNewNotification from '../../parser/NotificationHandler'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: 50,
    },
    pos: {
      marginBottom: 12,
      align: "left",
    },
  });

export default function FriendsManagement(route) {
    const classes = useStyles();

    const clickedFriend = (friend) => {
      console.log("clicked!");
        storeNewNotification(friend, route);
    }
    
    const childrenTrimmed = (item, index) =>
    <ListItem key={item.toString()} >
    <Button variant="contained" size="small" color="primary" 
      onClick={ () => clickedFriend(item)}>
      Share
    </Button>
    <ListItemText className={classes.pos} color="textSecondary"
      align = "left" key={index} >
        
            {`${item}`.split('.')[0].split('//')[1]}

    </ListItemText>
    </ListItem>;
  
    return (
      <Card elevation={5} className={classes.root}>
          <CardContent>
        <Typography variant="h5" component="h2">
          Friends
        </Typography>
        <List src = "user.friends"
            children = {childrenTrimmed} >
        </List>
      </CardContent>
        <CardActions>
            <Button size="small">Add friend</Button>
        </CardActions>
      </Card>
    );
  }