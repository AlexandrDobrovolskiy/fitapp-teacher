import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

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
} from "elements/@material"

const SignInPage = (props) => {
  const { classes } = props;

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
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
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

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInPage);