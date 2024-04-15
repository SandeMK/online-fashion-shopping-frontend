import { User } from "../types/user";

export interface IAppState {
    user?: Partial<User>
    isAuthenticated: boolean
    custom_token?: string
    stylesFilter?: string
}