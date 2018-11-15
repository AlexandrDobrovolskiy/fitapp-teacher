import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Typography,
  Icon,
  Modal,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";

export default class ScheduleItem extends Component {
  static propTypes = {
    lesson: PropTypes.object.isRequired
  };

  state = {
    active: false,
    start: null,
    end: null,
    deleteModalOpen: false,
    editModalOpen: false
  };

  componentDidMount = () => {
    const { date } = this.props.lesson;

    const frank = new Date(date);
    const start = new Date(new Date(frank).setHours(frank.getUTCHours()));
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

  render() {
    const { title, group, room } = this.props.lesson;
    const { active } = this.state;
    return (
      <>
        <Divider />
        <ListItem elevation={2} button>
          <Typography variant="h6" component="h6">
            <>
              {new Date(this.state.start).toTimeString().substr(0, 5)} -{" "}
              {new Date(this.state.end).toTimeString().substr(0, 5)}
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
              />
            )}
            <Chip
              icon={<Icon>location_on</Icon>}
              label={room}
              color="primary"
              variant="outlined"
            />
            <IconButton onClick={this.toggleEditModal}>
              <Icon>edit</Icon>
            </IconButton>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.editModalOpen}
              onClose={this.toggleEditModal}
            >
              <div>Hello</div>
            </Modal>
            <IconButton onClick={this.toggleDeleteModal}>
              <Icon>delete</Icon>
            </IconButton>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.deleteModalOpen}
              onClose={this.toggleDeleteModal}
            >
              <div>Hello delete</div>
            </Modal>
          </ListItemSecondaryAction>
        </ListItem>
      </>
    );
  }
}
