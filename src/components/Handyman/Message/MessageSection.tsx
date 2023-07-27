import React from 'react';

import MessageList from '@/components/Client/Section/MessageList';
type MessageSectionProps = {
    
};

const MessageSection:React.FC<MessageSectionProps> = () => {
    
    return (  <main className='  flex flex-col'>
         
    <section className=''>
  
     <MessageList/>
   </section>
   </main>
)}
export default MessageSection;