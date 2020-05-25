import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonLink = ({styles, href, text}) => (
  <Button color={styles} to={href} component={Link}>
    {text}
  </Button>
);

export default ButtonLink;