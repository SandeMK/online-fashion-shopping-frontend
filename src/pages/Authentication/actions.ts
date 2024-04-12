import toast from "react-hot-toast"
import { SignUpState } from "./SignUp"
import { apiConfig } from "../../apis/config"
import { login } from "../../apis/authentication/login"
import { IAppState } from "../../context/interfaces"

export const Actions = (setAppState: (value: Partial<IAppState>) => void) => {

    const validate = (state: Partial<SignUpState>) => {
        const { display_name, email, password, password_confirmation, user_type } = state
        if (!display_name || !email || !password || !password_confirmation || !user_type) {
            toast.error('All fields are required')
        }

        if (password !== password_confirmation) {
            toast.error('Passwords do not match')
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters')
        }

        if (!email.includes('@')) {
            toast.error('Invalid email address')
        }

        return true
    }
    return {
        validateAndSignUp: async (state: Partial<SignUpState>, setState: (state: Partial<SignUpState>) => void) => {
            if (!validate(state)) return

            setState({ isLoading: true })
            fetch(`${apiConfig.baseURL}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    display_name: state.display_name,
                    email: state.email,
                    password: state.password,
                    user_type: state.user_type,
                    phone_number: state.phone_number,
                }),
            }).then(async (response) => {
                if (response.ok) {
                  const { message, user } = await login({ email: state.email, password: state.password })
                  if(user) {
                    setAppState({ user, isAuthenticated: true})
                  } else {
                    toast.error(message || 'An error occurred')
                  }

                } else {
                    const result = await response.json()
                    toast.error(result.message)
                }
            }).catch((error) => {
                toast.error(error.message)
            }).finally(() => {
                setState({ isLoading: false })
            })
        }
    }  
}