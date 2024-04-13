import { User } from "../../../types/user"

export interface Message {
    id: string
    sender_id: string
    content: string
    timestamp: Date
}

export interface Conversation {
    id: string
    messages: Message[]
}

export interface ChatsContainerState {
    isLoading: boolean
    conversation?: Conversation
    message?: string,
    users: User[]
}