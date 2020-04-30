import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List } from '@solid/react';

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

export default function FriendsManagement() {
    const classes = useStyles();

    const childrenTrimmed = (item, index) =>
    <Typography className={classes.pos} color="textSecondary"
      align = "left" key={index}>
        <a href = {item}>
            {`${item}`.split('.')[0].split('//')[1]}
        </a>
    </Typography>;
  
    return (
      <Card elevation={5} className={classes.root}>
          <CardContent>
        <Typography data-testid="title" variant="h5" component="h2">
          Friends
        </Typography>
        <List data-testid="friends" src = "user.friends"
            children = {childrenTrimmed} >
        </List>
      </CardContent>
        <CardActions>
            <Button data-testid="add" size="small">Add friend</Button>
        </CardActions>
      </Card>
    );
  }