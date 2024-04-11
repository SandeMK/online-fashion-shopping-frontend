
import { User } from "../../types/user"
import { apiConfig } from '../config'

export interface LoginRequest {
    email: string
    password: string
}
export interface LoginResponse {
   user?: User
   message?: string
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
   try {
    const response = await fetch(`${apiConfig.baseURL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (response.ok) {
        const result = await response.json()
        return { user: result }
    }
    const result = await response.json()
    return { message: result.message }
   } catch (error) {
    return { message: error.message }
   }
}