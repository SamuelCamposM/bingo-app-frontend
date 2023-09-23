export interface EnvVariables {
  VITE_API_URL: string;
}

export const getEnvVariables = () => {
  import.meta.env;

  return {
    ...import.meta.env,
  };
};
