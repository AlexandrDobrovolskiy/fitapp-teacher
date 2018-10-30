import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withStyles from "@material-ui/core/styles/withStyles";
import { doExample } from "./actions";

import styles from "./styles";
import {
  CssBaseline,
  Paper,
  LockIcon,
  Avatar,
  Typography,
  FormControl,
  FormControlLabel,
  InputLabel,
  Input,
  Checkbox,
  Button
} from "lib/elements/@material";

class SignInPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    phone: "",
    password: "",
    shouldRememder: false
  };

  handleInputChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = name => event => {
    const { checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleSubmit = (event) => {
    const { phone, password, shouldRememder } = this.state;
    this.props.login();

    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <Input
                  id="phone"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  onChange={this.handleInputChange("phone")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleInputChange("password")}
                />
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    onChange={this.handleSelectChange("shouldRememder")}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                Sign in
                
              </Button>
            </form>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

const mapState = ({ auth }) => auth;

const mapDispatch = dispatch => bindActionCreators({
  doExample
}, dispatch)

export default connect(mapState, mapDispatch)(withStyles(styles)(SignInPage));
