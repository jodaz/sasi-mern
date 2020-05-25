import { useReducer } from 'react';
import axios from 'axios';

import { REGISTER } from './actions';

const registerUser = (data, history) => {
  axios
    .post('/api/users', data)
    .then(res => history.push('/login'))
    .catch(err => dispatchEvents)
};
