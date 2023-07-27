import MessageItem from '@/components/Handyman/Message/MessageItem';
import Image from 'next/image';
import React from 'react';

type MessageListProps = {
    
};

const MessageList:React.FC<MessageListProps> = () => {
    
    return (<div className=' grid grid-cols-12 min-w-[10rem] box-shadow-bottom p-2 sm:p-5 sm:m-5 bg-white'>
       
    <div className=' col-span-10 '>
      <MessageItem name='Jhon Smit'
       time="5 hours ago" 
       description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industry&apos;s standard dummy text'
      />
      <MessageItem name='Jhon Chena'
       time="5 hours ago" 
       description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industry&apos;s standard dummy text'
      />

    </div>

    <div className='flex flex-col justify-center col-start-12 col-span-1 '>
    <Image src={"/icons/uparrow.svg"} className='cursor-pointer' alt='up_icon' width={30} height={30}/>
    <Image src={"/icons/downarrow.svg"} className='cursor-pointer' alt='up_icon' width={30} height={30}/>
    </div>
  </div>)
}
export default MessageList;