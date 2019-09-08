import React from 'react';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu'; //needs to be anchored to a button or
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import { makeStyles } from '@material-ui/styles';

export default ({ channels, onClick, currentChannel }) => {

   // const classes = useStyles();

   return (
      <div>
         <StyledMenuList >
            {channels.map(
               (channel) => {
                  return (
                     <StyledMenuItem key={channel.id}
                        onClick={() => onClick(channel.id)}
                        selected={currentChannel === channel.id}
                     // classes={{ selected: classes.selected }}
                     >
                        <ListItemIcon>
                           <NotificationsNone />
                        </ListItemIcon>
                        <ListItemText primary={channel.name} />
                     </StyledMenuItem>
                  )
               }
            )}
         </StyledMenuList>
      </div>

   )

}



//  https://material-ui.com/customization/palette/
const StyledMenuItem = withStyles(theme => ({
   // root: {
   //    '&:active': {
   //       backgroundColor: theme.palette.primary.light,
   //       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
   //          color: theme.palette.common.white,
   //       },
   //    },
   // },
   selected: {
      backgroundColor: '#FFE5E5 !important',
      color: '#666666 !important',
      width: '105%',
      borderRadius: '8px'
   },
}))(MenuItem);
// The MenuItem is a wrapper around ListItem with some additional styles. You can use the same list composition features with the MenuItem component

// className={`${this.props.isActive? 'is-active' : ''}`}
const StyledMenuList = withStyles({
   // paper: {
   //   border: '1px solid #d3d4d5',
   // },
})(props => (
   <MenuList
      {...props}
   />
));


// const useStyles = makeStyles(theme => ({
//    root: props => ({
//       backgroundColor: props.backgroundColor,
//       color: theme.color,
//    }),
//    selected: {
//       backgroundColor: 'orange !important',
//    },
// }));


// const theme = createMuiTheme({
//    overrides: {
//       MuiMenuItem: {

//          root: {
//             '&$selected': {
//                backgroundColor: 'orange',
//             },
//          },
//       },
//    },
// });