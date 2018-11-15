import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getDaySchedule } from "../Schedule/actions";

import {
  Typography,
  withStyles,
  CssBaseline,
  List,
  Paper,
  ListSubheader
} from "@material-ui/core";
import styles from "./styles";
import ScheduleItem from "../Schedule/ScheduleItem";

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    getDaySchedule: PropTypes.func.isRequired,
    todaySchedule: PropTypes.array.isRequired
  };

  componentDidMount = () => {
    const { getDaySchedule, token } = this.props;
    getDaySchedule(token);
  };

  render() {
    const { classes, todaySchedule } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Typography component="h4" variant="h4" gutterBottom>
          <div className={classes.header}>Сьогодні</div>
        </Typography>
        <Paper>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">Розклад на сьогодні</ListSubheader>
            }
          >
            {todaySchedule.map((lesson, index) => (
              <ScheduleItem lesson={lesson} key={index} />
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}

const mapState = ({ session, schedule }) => ({
  token: session.user.token,
  todaySchedule: schedule.today
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      getDaySchedule
    },
    dispatch
  );

const Connected = connect(
  mapState,
  mapDispatch
)(HomePage);

export default withStyles(styles)(Connected);
