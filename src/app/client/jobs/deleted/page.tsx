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
    <main className=' h-screen flex flex-col m-10 '>
         
    <section className='p-5 bg-white'>
    {/*  <div className=' grid grid-cols-12 min-w-[20rem]'>
       
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
     </div> */}
     <div className='min-w-[25rem]'>
     
     
     
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
