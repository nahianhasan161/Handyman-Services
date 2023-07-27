import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
import InputRow from '@/components/Admin/Section/InputRow';
import EmailForm from '@/components/Client/Page/Form/EmailForm';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className=' h-screen flex flex-col m-2 sm:m-5 md:m-8 lg:m-10 '>
         
          {/* Section */}
         
         
            
         <EmailForm/>
        </main>
    
  );
}
export default Page;
