import React from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "./actions";
import { bindActionCreators } from "redux";

const mapState = ({ drawer }) => ({
  open: drawer.open
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      toggleDrawer
    },
    dispatch
  );

export const withDrawer = Drawer => Consumer => {
  const ComposeWithDrawer = ({ open, toggleDrawer }) => {
    const handleClose = () => {
      if (open) {
        toggleDrawer();
      }
    };

    return (
      <>
        <Drawer open={open} toggle={toggleDrawer} />
        <div 
          style={{ marginLeft: "73px" }} 
          onClick={handleClose}
        >
          <Consumer toggleDrawer={toggleDrawer} />
        </div>
      </>
    );
  };

  return connect(
    mapState,
    mapDispatch
  )(ComposeWithDrawer);
};
