import toast from "react-hot-toast"
import { apiConfig } from "../../../../apis/config"
import { NavigateFunction } from "react-router-dom"
import { StylistItemState } from "."

export const Actions = (navigate: NavigateFunction, setState: (initState: Partial<StylistItemState>) => void) => {
    return {
        chatRequest: async (user_id: string, stylist_id: string, custom_token: string) => {

            if(!custom_token) {
                toast.error('An error occurred while sending chat request')
                return
            }

            try {
                setState({ isLoading: true })
                const response = await fetch(`${apiConfig.baseURL}/chat/request`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${custom_token}`
                    },
                    body: JSON.stringify({ 
                        sender_id: user_id,
                        receiver_id: stylist_id
                     })
                })
                
                if(response.ok) {
                    const { id } = await response.json()
                    toast.success('Chat request sent successfully')
                    navigate(`/messages/${id}`)
                }
            } catch (error) {
                toast.error(error.message || 'An error occurred while sending chat request')
            } finally {
                setState({ isLoading: false })
            }
        }
    }
}