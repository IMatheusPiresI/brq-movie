import axios from 'axios';

export const apiTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
export const API_KEY = '72b828205fe20d575b9bdfb06aea07e4';
