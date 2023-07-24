import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
import MessageSection from '@/components/Handyman/Message/MessageSection';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className=' h-screen flex flex-col m-10 '>
         
         <section className='p-5 bg-white'>
         <MessageSection/>
        </section>
        </main>
    
  );
}
export default Page;
