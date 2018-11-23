import React from "react";
import PropTypes from "prop-types";

import {
  Modal as MaterialModal,
  Paper,
  Typography,
  Divider,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    actions: PropTypes.arrayOf(PropTypes.node),
    classes: PropTypes.object.isRequired
  };

  render() {
    const { open, toggle, title, children, actions, classes } = this.props;
    return (
      <MaterialModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={toggle}
      >
        <div className={classes.modalWrapper}>
          <div className={classes.modalBackground} onClick={toggle} />
          <Paper className={classes.modalPaper}>
            <div className="modalTitle">
              <Typography
                variant="h6"
                component="div"
                className={classes.modalTitle}
              >
                {title}
              </Typography>
              <Divider />
            </div>
            <div className={classes.modalContent}>
            {children}
            </div>
            {actions.length > 0 && (
              <div>
                <div className={classes.modalActionsWrapper}>
                  {actions.map(action => action)}
                </div>
              </div>
            )}
          </Paper>
        </div>
      </MaterialModal>
    );
  }
}

export default withStyles(styles)(Modal);
