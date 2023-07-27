import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
import InputRow from '@/components/Admin/Section/InputRow';
import PasswordForm from '@/components/Client/Page/Form/PasswordForm';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className=' h-screen flex flex-col  '>
         
         <PasswordForm/>
        </main>
    
  );
}
export default Page;
