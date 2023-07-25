import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
import DeleteTableItem from '@/components/Client/Table/DeleteTableItem';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className=' h-screen flex flex-col  '>
         
    <section className='p-2 sm:p-5 bg-white'>
  
     <div className='min-w-[10rem]'>
     
     
     
          <DeleteTableItem
          title="Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin"
          date="20/8/2022"
          time="2:30 AM"
          />
      </div>
     
   </section>
   </main>
    
  );
}
export default Page;
