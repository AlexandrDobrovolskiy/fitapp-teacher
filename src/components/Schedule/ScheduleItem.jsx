import React, { Component } from "react";
import PropTypes from "prop-types";
import { timeFormat } from "lib/utils";

import {
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Typography,
  Icon,
  IconButton,
  ListItemSecondaryAction,
  withStyles,
  Button,
  MuiThemeProvider
} from "@material-ui/core";
import { Modal } from "lib/elements";
import { actionButtonsTheme } from "lib/themes";
import ScheduleEditForm from "./ScheduleEditForm";
import styles from "./styles";

class ScheduleItem extends Component {
  static propTypes = {
    lesson: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  state = {
    active: false,
    start: null,
    end: null,
    deleteModalOpen: false,
    editModalOpen: false,
    title: "",
    room: "",
    teacher: "",
    date: "",
    type: "",
    group: ""
  };

  componentDidMount = () => {
    const { date } = this.props.lesson;

    const start = new Date(new Date(date));
    const end = new Date(start).setHours(
      start.getHours() + 1,
      start.getMinutes() + 20
    );
    this.setState({ start, end });

    const now = new Date();
    if (start > now && end < now) {
      this.setState({ active: true });
    }
  };

  toggleEditModal = () => {
    const { editModalOpen } = this.state;
    this.setState({ editModalOpen: !editModalOpen });
  };

  toggleDeleteModal = () => {
    const { deleteModalOpen } = this.state;
    this.setState({ deleteModalOpen: !deleteModalOpen });
  };

  handleEdit = () => {
    const { id } = this.props.lesson;
    const onEdit = this.props.onEdit();
    const { title, room, date, type, group, teacher } = this.state.edit;
    const params = {
      id,
      title,
      room,
      teacher,
      date,
      type,
      group
    };

    onEdit(params);
    this.toggleEditModal();
  };

  handleDelete = () => {
    const { id } = this.props.lesson;
    const onDelete = this.props.onDelete();
    onDelete({ id });
    this.toggleDeleteModal();
  };

  render() {
    const { classes, lesson } = this.props;
    const { title, group, room } = lesson;
    const { active, deleteModalOpen, editModalOpen } = this.state;

    return (
      <>
        <Divider />
        <ListItem elevation={2} button>
          <Typography variant="h6" component="h6">
            <>
              {timeFormat(this.state.start)}{" - "}{timeFormat(this.state.end)}
            </>
          </Typography>
          <ListItemText primary={<b>{group.name}</b>} secondary={title} />
          <ListItemSecondaryAction>
            {active && (
              <Chip
                icon={<Icon>access_time</Icon>}
                label={"Триває"}
                color="primary"
                variant="outlined"
                className={classes.activeChip}
              />
            )}
            <Chip
              icon={<Icon>location_on</Icon>}
              label={room}
              color="primary"
              variant="outlined"
              className={classes.locationChip}
            />
            <IconButton onClick={this.toggleEditModal}>
              <Icon>edit</Icon>
            </IconButton>
            <Modal
              actions={[
                <Button
                  className={classes.modalButton}
                  color="primary"
                  variant="outlined"
                  key="edit_confirm"
                  onClick={this.handleEdit}
                >
                  Редагувати
                </Button>,
                <Button
                  variant="outlined"
                  key="edit_cacncel"
                  className={classes.modalButton}
                  onClick={this.toggleEditModal}
                >
                  Назад
                </Button>
              ]}
              title="Рeдагувати"
              toggle={this.toggleEditModal}
              open={editModalOpen}
            >
              <ScheduleEditForm lesson={lesson}/>
            </Modal>
            <IconButton onClick={this.toggleDeleteModal}>
              <Icon>delete</Icon>
            </IconButton>
            <MuiThemeProvider theme={actionButtonsTheme}>
              <Modal
                actions={[
                  <Button
                    color="secondary"
                    variant="outlined"
                    key="delete_confirm"
                    className={classes.modalButton}
                    onClick={this.handleDelete}
                  >
                    Відмінити
                  </Button>,
                  <Button
                    onClick={this.toggleDeleteModal}
                    variant="outlined"
                    key={"delete_cancel"}
                    className={classes.modalButton}
                  >
                    Назад
                  </Button>
                ]}
                title="Відміна заняття"
                toggle={this.toggleDeleteModal}
                open={deleteModalOpen}
              >
                Ви впевнені, що хочете відмінити заняття?
              </Modal>
            </MuiThemeProvider>
          </ListItemSecondaryAction>
        </ListItem>
      </>
    );
  }
}

export default withStyles(styles)(ScheduleItem);
