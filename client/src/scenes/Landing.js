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

const FormRow = ({classes}) => (
  <React.Fragment>
    <Helmet>
      <title>Inicio | SASI</title>
    </Helmet>
    <Paper className={classes.paper}>
      <Grid
        container 
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <ButtonLink
            styles="primary"
            href="/signup"
            text="Regístrate"
            />
        </Grid>
        <Grid item>
          <ButtonLink
            styles="primary"
            href="/login"
            text="Iniciar sesión"
            />
        </Grid>
      </Grid>
    </Paper>
  </React.Fragment>
);

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={12}
        justify="center"
        direction="row"
      >
        <FormRow classes={classes}/>
      </Grid>
    </div>
  )
};

export default Landing;