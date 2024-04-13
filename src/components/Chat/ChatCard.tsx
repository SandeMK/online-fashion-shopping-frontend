import { useNavigate } from 'react-router-dom';
import { Chat } from '../../types/chat';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import UserFive from '../../images/user/user-05.png';
import { ChatData } from '../../pages/Messages/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const chatData: Chat[] = [
  {
    avatar: UserOne,
    receiver_name: 'Devid Heilo',
    text: 'How are you?',
    time: 12,
    textCount: 3,
    color: '#10B981',
    conversation_id: '1',
  },
  {
    avatar: UserTwo,
    receiver_name: 'Henry Fisher',
    text: 'Waiting for you!',
    time: 12,
    textCount: 0,
    color: '#DC3545',
    conversation_id: '2',
  },
  {
    avatar: UserFour,
    receiver_name: 'Jhon Doe',
    text: "What's up?",
    time: 32,
    textCount: 0,
    color: '#10B981',
    conversation_id: '3',
  },
  {
    avatar: UserFive,
    receiver_name: 'Jane Doe',
    text: 'Great',
    time: 32,
    textCount: 2,
    color: '#FFBA00',
    conversation_id: '4',
  },
  {
    avatar: UserOne,
    receiver_name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 0,
    color: '#10B981',
    conversation_id: '5',
  },
  {
    avatar: UserThree,
    receiver_name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 3,
    color: '#FFBA00',
    conversation_id: '6',
  },
];

export interface ChatCardProps {
  conversationId?: string;
  data: ChatData[];
}

const ChatCard = ({ data = [], conversationId }: ChatCardProps) => {
  const navigate = useNavigate()

  const onItemSelect = (conversationId: string) => {
    navigate(`/messages/${conversationId}`)
  }
  return data.length ? (
    <div className="col-span-12 rounded-sm border border-stroke bg-slate-200 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="h-12 px-7.5 text-xl font-semibold text-black dark:text-white">
        Chats
      </h4>

    <div className='bg-white'>
      {data.map((chat, key) => {
        const isSelected = conversationId === chat.conversation_id;
        return (
          <div
          onClick={() => onItemSelect(chat.conversation_id)}
          className={`flex items-center gap-5 py-3 px-7.5 ${isSelected ? 'bg-slate-300' : 'hover:bg-gray-3'} dark:hover:bg-meta-4 hover:cursor-pointer`}
          key={key}
        >
          <div className="relative h-14 w-14 rounded-full">
            <FontAwesomeIcon icon={faUserCircle} size={'3x'} className='h-20 rounded-md  dark:bg-meta-4' />
            <span
              className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-body"
              
            ></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black dark:text-white">
                {chat.receiver_name}
              </h5>
            </div>
            
          </div>
        </div>
        )
      }
      )}
    </div>
  </div>
  ) : (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
    <div className="flex flex-col w-full h-full items-center justify-center px-2">
      <h1 className="text-title-sm font-bold text-black dark:text-white">
        No conversations
      </h1>
    </div>
  </div>
  )
};

export default ChatCard;
