import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
import MessageList from '@/components/Client/Section/MessageList';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className='  flex flex-col'>
         
    <section className='p-5 bg-white'>
  
     <MessageList/>
   </section>
   </main>
    
  );
}
export default Page;
