import React from "react";

import styles from "./styles";
import {
  Fade,
  Icon,
  ListItem,
  ListItemText,
  withStyles,
  Tooltip
} from "@material-ui/core";

const ToggableIconButton = ({ open, icon, onClick, label, classes, tooltip }) => {

  if(!open){
    return (
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={tooltip} placement="right">
        <ListItem button onClick={onClick} className={classes.closedRoot}>
          <Icon>
            {icon}
          </Icon>
        </ListItem>
      </Tooltip>
    )
  }

  return (
      <ListItem button onClick={onClick} className={classes.openedRoot}>
        <Icon className={classes.icon}>
          {icon}
        </Icon>
        <ListItemText primary={label} />
      </ListItem>
  )
}

export default withStyles(styles)(ToggableIconButton);