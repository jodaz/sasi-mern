import React from 'react';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import Button from '../components/Button';


const Dashboard = () => (
  <React.Fragment>
    <Navbar />
    <Container>
      <Grid
        container
        justify="center"
      >
        <Grid item>
        </Grid>
      </Grid>
    </Container>
  </React.Fragment>
);

export default Dashboard;