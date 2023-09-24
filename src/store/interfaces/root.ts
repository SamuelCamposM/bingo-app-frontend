import { AuthState } from "./auth";
import { ChatState } from "./chat";

export interface RootState {
  auth: AuthState;
  chat: ChatState;
}
