import { APP_TMDB_BASE_URL, APP_TMDB_KEY } from '@env';
import axios from 'axios';

export const apiTMDB = axios.create({
  baseURL: APP_TMDB_BASE_URL,
});
export const API_KEY = APP_TMDB_KEY;
