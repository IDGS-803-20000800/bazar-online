import axios from 'axios';

const BASE_URL = '/api';

export const searchItems = (query) =>
  axios.get(`${BASE_URL}/items?q=${query}`).then((response) => response.data);

export const getItemById = (id) =>
  axios.get(`${BASE_URL}/items/${id}`).then((response) => response.data);