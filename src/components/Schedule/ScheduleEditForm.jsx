import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGroups } from "lib/actions";
import { format, timeFormat, getLessonNumber, lessonTime } from "lib/utils";
import _ from "lodash";

import { lessonTypes } from "../../constants";

import {
  FormControl,
  Input,
  InputLabel,
  withStyles,
  Grid,
  TextField,
  MenuItem
} from "@material-ui/core";
import styles from "./formStyles";

class ScheduleEditForm extends Component {
  static propTypes = {
    lesson: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  state = {
    ...this.props.lesson,
    group: this.props.lesson.group.id,
  };

  componentDidMount = () => {
    const { token, getGroups } = this.props;
    getGroups(token);
  };

  handleInputChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  handleTimeChange = e => {
    const { value } = e.target;
    const { date } = this.state;
    this.setState({date: lessonTime(date, value)})
  }

  render() {
    const { title, room, type, date, group } = this.state;
    const { classes, groups } = this.props;
    return (
      <form className={classes.form}>
        <Grid container>
          <Grid item xs={12} className={classes.gridRow}>
            <Grid item xs={8}>
              <FormControl
                margin="normal"
                className={classes.formControl}
                required
                fullWidth
              >
                <InputLabel htmlFor="phone">Назва дисципліни</InputLabel>
                <Input
                  id="title"
                  name="title"
                  autoComplete="title"
                  value={title}
                  autoFocus
                  onChange={this.handleInputChange("title")}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
              >
                <TextField
                  id="room"
                  name="room"
                  label="Аудиторія"
                  variant="outlined"
                  autoComplete="room"
                  value={room}
                  autoFocus
                  onChange={this.handleInputChange("room")}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridRow}>
            <Grid item xs={6}>
              <FormControl
                margin="normal"
                className={classes.formControl}
                required
                fullWidth
              >
                <TextField
                  id="type"
                  name="type"
                  label="Тип"
                  autoComplete="type"
                  value={type}
                  autoFocus
                  select
                  onChange={this.handleInputChange("type")}
                >
                  {_.range(1, 7).map(type => (
                    <MenuItem value={type} key={type}>
                      {lessonTypes[type]}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
                fullWidth
              >
                <TextField
                  select
                  id="group"
                  label="Група"
                  name="group"
                  autoComplete="group"
                  value={group}
                  autoFocus
                  onChange={this.handleInputChange("group")}
                >
                  {groups.map((group, index) => (
                    <MenuItem key={index} value={group.id}>
                      {group.name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridRow}>
            <Grid item xs={6}>
              <FormControl
                margin="normal"
                className={classes.formControl}
                required
              >
                <TextField
                  id="date"
                  label="Дата"
                  type="date"
                  value={format(new Date(date))}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl
                margin="normal"
                className={classes.formControl}
                required
              >
                <TextField
                  id="type"
                  name="type"
                  label="Номер"
                  autoComplete="type"
                  value={Number(getLessonNumber(date))}
                  className={classes.textField}
                  autoFocus
                  select
                  onChange={this.handleTimeChange}
                >
                  {_.range(1, 7).map(index => (
                    <MenuItem value={index} key={index}>
                      {index}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl
                margin="normal"
                required
                className={classes.formControl}
              >
                <TextField
                  id="time"
                  label="Час початку"
                  type="time"
                  disabled
                  value={timeFormat(date)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputProps={{
                    step: 600 // 10 min
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapState = ({ groups, session }) => ({
  groups: groups.groups,
  token: session.user.token
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      getGroups
    },
    dispatch
  );

const Consumer = connect(
  mapState,
  mapDispatch
)(ScheduleEditForm);

export default withStyles(styles)(Consumer);
