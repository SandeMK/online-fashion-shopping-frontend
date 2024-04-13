import React, { useEffect } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ChatCard from '../../components/Chat/ChatCard';
import { ChatData } from './interfaces';
import { useMergeState } from '../../hooks/useMergeState';
import { useAppContext } from '../../context';
import { ChatsContainer } from './ChatsContainer';
import { FirestoreActions } from './firestore.actions';

export interface MessagesState {
    chatData: ChatData[]
}
const Messages: React.FC = () => {
    const conversationId = window.location.pathname.split('/').pop();
    const { state: { user } } = useAppContext()
    const [state, setState] = useMergeState<Partial<MessagesState>>({
        chatData: [],
    })

    const chat = state.chatData.find(chat => chat.conversation_id === conversationId)

    const {chatDataStream } = FirestoreActions(state, setState, user)

    useEffect(() => {
       const unsubscribe = chatDataStream()
       return () => {
           unsubscribe()
       }
    }, [conversationId])

  return (
    <DefaultLayout>
        <div className='flex bg-slate-200 min-h-203 mb-14'>
            <ChatCard data={state.chatData} conversationId={conversationId}  />
            <ChatsContainer chat={chat} conversationId={conversationId} />
        </div>
    </DefaultLayout>
  );
};

export default Messages;
