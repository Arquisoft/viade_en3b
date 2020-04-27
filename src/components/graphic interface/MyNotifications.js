
import React from 'react';
import Button from '@material-ui/core/Button';
import { MenuItem, Paper, Popper, Grow, MenuList, ListItemIcon, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const MyNotifications = () => {
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
               <NotificationsIcon />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper >
                            <MenuList >
                                
                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default MyNotifications;