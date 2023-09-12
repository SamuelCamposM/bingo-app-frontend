export interface User {
    // Define the properties of the User object here
  }
  
  export interface AuthState {
    status: "checking" | "authenticated" | "not-authenticated";
    user: User;
    errorMessage?: string;
  }
  
  export interface LoginParams {
    email: string;
    password: string;
  }
  
  export interface RegisterParams {
    name: string;
    email: string;
    password: string;
  }
  export interface RootState {
    auth: AuthState;
    // Define otras partes de tu estado de Redux aquí
  }
  