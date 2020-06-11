import axios from 'axios';

export default axios.create({
  baseURL: 'https://departure-schedule.firebaseio.com/',
});
