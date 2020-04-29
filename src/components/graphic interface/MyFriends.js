import React from 'react';
import Button from '@material-ui/core/Button';
import { MenuItem, Paper, Popper, Grow, MenuList, ListItemIcon, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/PeopleAlt';
import AddGroupIcon from '@material-ui/icons/GroupAdd';
import SharedRoutesIcon from '@material-ui/icons/PersonPinCircle';

const MyFriends = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                My Friends
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper >
                            <MenuList >

                                <MenuItem onClick={() =>  window.location.href='#/newGroup'}>
                                    <ListItemIcon>
                                        <AddGroupIcon />
                                    </ListItemIcon>
                                    <Typography>Create New Group</Typography>
                                </MenuItem>

                                <MenuItem onClick={() =>  window.location.href='#/myroutes'}>
                                    <ListItemIcon>
                                        <SharedRoutesIcon />
                                    </ListItemIcon>
                                    <Typography>Shared Routes</Typography>
                                </MenuItem>

                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default MyFriends;