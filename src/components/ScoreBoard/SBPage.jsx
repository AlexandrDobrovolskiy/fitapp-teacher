import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withDrawer } from 'lib/utils';
import { withStyles } from "@material-ui/core/styles";
import SBDrawer from "./SBDrawer";

import { CssBaseline, Paper } from "@material-ui/core";
import styles from "./pageStyle";

class SBPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {

  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.tablePaper}>

        </Paper>
        <CssBaseline />
      </div>
    )
  }
}

const Consumer = connect()(SBPage);

const StyledPage = withStyles(styles)(Consumer);

export default withDrawer(SBDrawer)(StyledPage);
