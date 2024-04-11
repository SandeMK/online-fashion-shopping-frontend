import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ChatCard from '../../components/Chat/ChatCard';
import UserOne from '../../images/user/user-01.png';

const Messages: React.FC = () => {
  return (
    <DefaultLayout>
        <div className='flex bg-slate-200'>
            <ChatCard />
            <div className='flex flex-col w-5/6'>
                {/*  Header:  */}
                <div className='px-4 py-2 flex bg-white items-center space-x-4'>
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={UserOne} alt="User" />
                    </div>
                    <h5 className="font-medium text-black dark:text-white">
                        Philasande
                    </h5>
                </div>
                {/*  Chat:  */}
                <div className='flex flex-col p-4 h-full'>
                    <div className='flex flex-col flex-grow space-y-4'>
                        <div className='flex justify-end'>
                            <div className='flex flex-col'>
                                <div className='bg-primary text-white p-2 rounded-md'>
                                    Hello
                                </div>
                                <div>
                                    <span className='text-xs'>12:30</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-start'>
                           <div className='flex flex-col'>
                            <div className='bg-primary text-white p-2 rounded-md'>
                                    Hello
                                </div>
                                <div>
                                    <span className='text-xs'>12:30</span>
                                </div>
                           </div>
                        </div>
                    </div>
                    
                </div>
                 <div className='p-4 bg-white'>
                        <input type='text' placeholder='Type a message...' className='w-full border-none outline-none' />

                    </div>
            </div>
        </div>
    </DefaultLayout>
  );
};

export default Messages;
