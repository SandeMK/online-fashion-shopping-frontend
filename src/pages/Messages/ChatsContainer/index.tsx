import { useEffect } from "react";
import { useAppContext } from "../../../context";
import { useMergeState } from "../../../hooks/useMergeState";

import { ChatsContainerState } from "./interfaces";
import { ChatData } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPaperPlane, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FirestoreActions } from "./firestore.actions";

export interface ChatsContainerProps {
   conversationId: string,
   chat?: ChatData
}

export const ChatsContainer = ({ chat, conversationId }: ChatsContainerProps) => {
    const { state: { user } } = useAppContext()
    const [state, setState] = useMergeState<Partial<ChatsContainerState>>({
        isLoading: false,
        message: '',
        conversation: null
    })

    const { chatStream, sendMessage } = FirestoreActions(state, setState)


    useEffect(() => {
        const unsubscribe = chatStream(conversationId)
        return () => {
            console.log('unsubscribing...')
            unsubscribe()
        }
    }, [conversationId])

    const formatDate = (date: Date) => {
        const d = new Date(date)
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth()
        const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
        const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
        return `${day}-${month} ${hours}:${minutes}`
    }

    return (
        state.conversation ? (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col p-4 bg-white'>
                <div className="flex w-full space-x-4 items-baseline">
                    <h1 className='text-title-sm font-bold text-black dark:text-white'>{ chat?.receiver_name }</h1>
                    <div>
                        <FontAwesomeIcon icon={faMailBulk} />
                        <a className='dark:text-gray-400'> { chat.reciever_email }</a> 
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <a className='dark:text-gray-400'> { chat.receiver_phone_number }</a> 
                    </div>
                </div>
                <a className='text-black dark:text-white border-l pl-1'>{ chat?.receiver_bio }</a>
            </div>
           

            <div className='flex flex-col p-4 h-full'>
                <div className='flex flex-col flex-grow space-y-4'>
                    {
                        state.conversation.messages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()).map((message, i) => {
                            return (
                                <div key={`state.conversation.messages.${i}`} className={`flex space-x-4 ${message.sender_id === user?.id ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex flex-col p-2 ${message.sender_id === user?.id ? 'bg-green-700': 'bg-slate-600'} text-white rounded-lg`}>
                                        <div className='flex space-x-1 items-baseline'>
                                            <h5 className='font-medium text-gray dark:text-white'>{ message.sender_id === user?.id ? 'You' : chat?.receiver_name }</h5>
                                            <span className='text-xs text-gray-400 dark:text-gray-500'>{ formatDate(message.timestamp) }</span>
                                        </div>
                                        <p className='text'>{ message.content }</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>

             <div className='fixed bottom-3 flex p-4 bg-white w-3/6'>
                <input
                    onChange={(e) => {
                        e.preventDefault()
                        setState({message: e.target.value})
                    }}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            sendMessage(conversationId, user?.id, state.message)
                        }
                    }}
                    value={state.message}
                    type='text'
                    placeholder='Type a message...'
                    className='w-full border-none outline-none'
                />
                <button
                    onClick={() => {
                        sendMessage(conversationId, user?.id, state.message)
                    }}
                    className='bg-primary text-white p-2 rounded-lg px-4'
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>

        </div>
        ) : (
            <div className='flex flex-col w-5/6'>
                <div className='flex flex-col w-full h-full items-center justify-center'>
                    <h1 className='text-title-sm font-bold text-black dark:text-white'>No conversation selected</h1>
                </div>
            </div>
        )
    )
}