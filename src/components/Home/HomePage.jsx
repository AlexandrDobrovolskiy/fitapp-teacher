import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getDaySchedule,
  editLesson,
  deleteLesson,
  createLesson
} from "lib/actions";

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

  getEditLessonHandler = () => {
    const { token, editLesson } = this.props;
    return params => {
      editLesson(token, params);
    };
  };

  getDeleteLessonHandler = () => {
    const { token, deleteLesson } = this.props;
    return params => {
      deleteLesson(token, params);
    };
  };

  render() {
    const { classes, todaySchedule, token } = this.props;
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
              <ScheduleItem
                lesson={lesson}
                key={index}
                token={token}
                onEdit={this.getEditLessonHandler}
                onDelete={this.getDeleteLessonHandler}
              />
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
      getDaySchedule,
      createLesson,
      editLesson,
      deleteLesson
    },
    dispatch
  );

const Connected = connect(
  mapState,
  mapDispatch
)(HomePage);

export default withStyles(styles)(Connected);
