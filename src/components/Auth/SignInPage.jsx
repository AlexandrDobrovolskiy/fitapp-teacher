import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

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
    password: ""
  };

  handleSubmit = () => {};

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
                  onChange={()=>{}}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
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

export default withStyles(styles)(SignInPage);
