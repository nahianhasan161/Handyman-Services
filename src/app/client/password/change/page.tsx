import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import Image from 'next/image';
import MessageItem from '@/components/Handyman/Message/MessageItem';
import InputRow from '@/components/Admin/Section/InputRow';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <main className=' h-screen flex flex-col  '>
         
         <section className='p-5 bg-white mt-10  py-2 sm:py-5 lg:py-10'>
         <div >
         
         <InputRow 
            name1='old_password'
            title1='Old Password'
            type1='password'
            placeholder1='********'
            name2='new_password'
            title2='New Password'
            type2='password'
            placeholder2='********'
            />
         <ActionButton title='Save Changes' className='float-right'/>
     </div>
     
        </section>
        </main>
    
  );
}
export default Page;
