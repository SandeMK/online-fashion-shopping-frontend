import { apiConfig } from "../../../apis/config"
import { ChatsContainerState } from "./interfaces"

export const Actions = (state: Partial<ChatsContainerState>, setState: (initState: Partial<ChatsContainerState>) => void) => {
    return {
        getConversation: async (conversation_id: string, custom_token: string) => {
            try {
                if(state.isLoading) return
                setState({ isLoading: true })
                const response = await fetch(`${apiConfig.baseURL}/chat/${conversation_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${custom_token}`
                    }
                })
                if(response.ok) {
                    const data = await response.json()
                    setState({ conversation: data })
                }
                setState({ isLoading: false })
            } catch (error) {
                setState({ isLoading: false })
            }
        },

        sendMessage: async (conversation_id: string, sender_id: string,  content: string, custom_token: string) => {
            const pushMessage = () => {
                const messages = state.conversation?.messages || []
                messages.push({
                    id: `${sender_id}_${Date.now()}`,
                    sender_id,
                    content,
                    timestamp: new Date()
                })
                setState({ conversation: { ...state.conversation, messages } })
            }

            const removeMessage = () => {
                const messages = state.conversation?.messages || []
                messages.pop()
                setState({ conversation: { ...state.conversation, messages } })
            }

            try {
                if(state.isLoading || state.message === '') return
                setState({ isLoading: true })
                pushMessage()

                const response = await fetch(`${apiConfig.baseURL}/chat/send`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${custom_token}`
                    },
                    body: JSON.stringify({
                        conversation_id,
                        content,
                        sender_id
                    })
                })
                if(response.ok) {
                    const data = await response.json()
                    setState({ conversation: data })
                } else {
                    removeMessage()
                }
            } catch (error) {
                removeMessage()
            } finally {
                setState({ isLoading: false, message: '' })
            }
        }
    }
}