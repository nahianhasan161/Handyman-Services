import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className=' m-10 p-5'>
         
         
         
          <ActionButton className='p-12' title='+ Add New Job'/>
          
        
        </main>
    
  );
}
export default Page;
