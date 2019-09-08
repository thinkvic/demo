import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MessageIcon from '@material-ui/icons/Message';

export default ({ messages }) => {
    return (
        <List component="nav" aria-label="main mailbox folders">
            {messages.map(
                (msg) => {
                    return (<ListItem key={msg.id}>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <Typography>{msg.content}</Typography>
                    </ListItem>
                    )
                }
            )}
        </List>
    )
}