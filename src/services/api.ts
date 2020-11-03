import axios from 'axios';

const api = axios.create({
  baseURL: 'https://thidiamond-api.herokuapp.com/buildbox',
});

export default api;
