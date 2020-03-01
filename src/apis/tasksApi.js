import axios from "axios";

const BASE_URI = "http://localhost:3500";

export const tasksApi = axios.create({
  baseURL: BASE_URI
});
