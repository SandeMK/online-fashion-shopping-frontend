import { collection, onSnapshot, query, addDoc, Firestore, Timestamp } from "firebase/firestore"
import { firestore } from "../../../firebase"
import { ChatsContainerState, Conversation, Message } from "./interfaces"
import toast from "react-hot-toast"

export const FirestoreActions = (state: Partial<ChatsContainerState>, setState: (initState: Partial<ChatsContainerState>) => void) => {

    return {
        chatStream: (conversation_id: string) => {
            const messagesRef = collection(firestore, 'chats', conversation_id, 'messages')
            const q = query(messagesRef)

            return onSnapshot(q, {
                next: (snapshot) => {
                    if(snapshot.empty) return
                      
                    const messages: Message[] = snapshot.docs.map((doc) => {
                        const message = doc.data()
                        return {
                            id: doc.id,
                            sender_id: message.sender_id,
                            content: message.content,
                            timestamp: message.timestamp.toDate()
                        }
                    })

                    const conversation: Conversation = {
                        id: conversation_id,
                        messages,
                    }

                    setState({ conversation })
                },
                error: (error) => {
                    console.error("Error fetching chat data: ", error);
                }
            })
        },

        sendMessage: async (conversation_id: string, sender_id: string, content: string) => {
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
                if(state.message === '') return
                pushMessage()

                const messageRef = collection(firestore, 'chats', conversation_id, 'messages')
                await addDoc(messageRef, {
                    sender_id,
                    content,
                    timestamp: Timestamp.now()
                })
                setState({ message: '' })
                
            } catch (error) {
                toast.error(error.message || 'An error occurred while sending message')
                removeMessage()
            }
        }
    }
}