import axios from 'axios'

export const axInstance = axios.create({
    baseURL: 'http://localhost:3100'
});
