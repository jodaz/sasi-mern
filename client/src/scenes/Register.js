import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonLink from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const FormRow = (classes) => (
  <Paper className={classes.paper}></Paper>
);

const Signup = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <title>Regístrate | SASI</title>
      </Helmet>
      <Grid
        container
      >
        <FormRow classes={classes} />
      </Grid>
    </React.Fragment>
  );
};

export default Signup;