import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import { styles } from "./styles";
import { Drawer } from "@material-ui/core";

class GroupDrawer extends Component {
  static ptopTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };

  render() {
    const { open, classes, toggle } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        Hello
        <button onClick={toggle}>
        toggle
        </button>
      </Drawer>
    );
  }
}

export default withStyles(styles)(GroupDrawer);
