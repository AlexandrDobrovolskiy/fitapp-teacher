import React, { Component } from "react";
import PropTypes from 'prop-types'

import { connect } from "react-redux";
import { toggleDrawer, registrDrawer } from "lib/actions";
import { bindActionCreators } from "redux";

const mapState = ({ drawer }) => ({
  open: drawer.open
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      toggleDrawer,
      registrDrawer
    },
    dispatch
  );

export const withDrawer = Drawer => Consumer => {

  class ComposeWithDrawer extends Component {
    static propTypes = {
      open: PropTypes.bool.isRequired,
      toggleDrawer: PropTypes.func.isRequired,
      registrDrawer: PropTypes.func.isRequired,
    }
    handleClose = () => {
      const { open, toggleDrawer } = this.props;
      if (!open) {
        return;
      }

      toggleDrawer();
    };

    componentDidMount = () => {
      const { registrDrawer } = this.props;
      registrDrawer();
    };
    

    render() {
      const { open, toggleDrawer, ...otherProps } = this.props;
      return (
        <>
          <Drawer open={open} toggle={toggleDrawer} />
          <div 
            style={{ marginLeft: "73px" }} 
            onClickCapture={this.handleClose}
          >
            <Consumer toggleDrawer={toggleDrawer} {...otherProps} />
          </div>
        </>
      );
    }

  }

  return connect(
    mapState,
    mapDispatch
  )(ComposeWithDrawer);
};
