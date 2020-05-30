import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonLink from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>SASI - 404</title>
    </Helmet>
    You are in NotFound page
  </React.Fragment>
);

export default NotFound;