import toast from "react-hot-toast"
import { MessagesState } from "."
import { apiConfig } from "../../apis/config"
import { User } from "../../types/user"

export const Actions = (state: Partial<MessagesState>, setState: (initState: Partial<MessagesState>) => void, user: User) => {
    return {
        getChatData: async () => {
            try {
                const { custom_token, id } = user
                const response = await fetch(`${apiConfig.baseURL}/user/${id}/chats`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${custom_token}`
                    }
                })
                if(response.ok) {
                    const data = await response.json()
                    setState({ chatData: data.chats })
                }
            } catch (error) {
                toast.error(error.message || 'An error occurred while fetching chat data')
            }
        }
    }
}