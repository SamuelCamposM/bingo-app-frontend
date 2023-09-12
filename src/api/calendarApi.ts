import axios, { AxiosRequestHeaders } from "axios";
import { getEnvVariables } from "../helpers";

interface EnvVariables {
  VITE_API_URL: string;
}

const { VITE_API_URL } = getEnvVariables() as unknown as EnvVariables;

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

//todo: CONFIGURAR INTERCEPTORES
calendarApi.interceptors.request.use((config) => {
  console.log(localStorage.getItem("token"));

  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token") || "",
  } as unknown as AxiosRequestHeaders;
  return config;
});

export default calendarApi;
