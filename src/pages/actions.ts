import toast from "react-hot-toast"
import { SettingsState } from "./Settings"
import { User } from "../types/user"
import { apiConfig } from "../apis/config"
import { IAppState } from "../context/interfaces"

export const Actions = (updateAppContext: (value: Partial<IAppState>) => void) => {

    return {
        validateAndUpdateProfile: async (state: Partial<SettingsState>, setState: (initState: Partial<SettingsState>) => void, user: Partial<User>) => {
            setState({ isLoading: true })
            const data = {
                display_name: state.display_name,
                bio: state.bio,
                phone_number: state.phone_number,
            }

            if(user.user_type === 'stylist') {
                data['styles'] = {
                    ...state.styles
                }
            }

            if (!data.display_name || !data.bio || !data.phone_number) {
                toast.error("Please fill all fields")
                return
            }

            await fetch(`${apiConfig.baseURL}/user/${user.id}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.custom_token}`
                },
                body: JSON.stringify({
                    ...data
                }),
            }).then(async (response) => {
                if (response.ok) {
                    toast.success('Profile updated successfully')
                    setState({ ...data, isLoading: false })
                    updateAppContext({ user: data })

                } else {
                    const result = await response.json()
                    toast.error(result.message || 'An error occurred')
                }
            }).catch((error) => {
                toast.error(error.message)
            }).finally(() => {
                setState({ isLoading: false })
            })
        }
    }
}