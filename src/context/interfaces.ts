import { User } from "../types/user";

export interface IAppState {
    user?: User
    isAuthenticated: boolean
    custom_token?: string
}