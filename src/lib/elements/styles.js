export default theme => ({
  modalBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1000
  },
  modalWrapper: {
    position: "absolute",
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  modalPaper: {
    position: "relative",
    display: "flex",
    top: "30%",
    minWidth: 400,
    width: "30vw",
    margin: 'auto',
    height: "auto",
    zIndex: 2000,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  modalTitle: {
    padding: 15,
  },
  modalContent: {
    minHeight: "20vh",
    padding: 15
  },
  modalActionsWrapper: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-end",
    padding: 5
  },
})