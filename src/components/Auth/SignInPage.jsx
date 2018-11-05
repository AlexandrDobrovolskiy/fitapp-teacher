import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withStyles from "@material-ui/core/styles/withStyles";
import { signIn, resetError } from "./actions";
import { routes } from "../../constants";

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
    shouldRememder: true
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
    const { phone, password } = this.state;
    const { signIn } = this.props;
    signIn(phone, password);
    
    event.preventDefault();
  };

  componentDidMount = () => {
    const { resetError } = this.props;
    window.addEventListener('beforeunload', () => {
      resetError();
    })
  }
  

  componentWillUnmount = () => {
    const { resetError } = this.props;
    resetError();
  };
  

  render() {
    const { classes, authenticated, error } = this.props;

    if(authenticated){
      return (
        <Redirect
          to={{
            pathname: routes.HOME,
          }}
        />
      )
    }

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
                    defaultChecked={true}
                    onChange={this.handleSelectChange("shouldRememder")}
                  />
                }
                label="Remember me"
              />
              {!!error && error}
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

const mapState = ({ session }) => session;

const mapDispatch = dispatch => bindActionCreators({
  signIn,
  resetError
}, dispatch)

export default connect(mapState, mapDispatch)(withStyles(styles)(SignInPage));
