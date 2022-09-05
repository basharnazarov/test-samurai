import axios from "axios";

export const endpoint = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});
