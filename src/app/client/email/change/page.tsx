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
    <main className=' h-screen flex flex-col m-10 '>
         
          {/* Section */}
         
         
            
         <section className='sm:p-5 p-3 bg-white'>
       
           {/*  <div className='grid grid-cols-12 gap-2 items-center pb-5 pr-[4rem] pl-[2rem] min-w-[40rem]'>
                <div className='col-span-6'>
           <InputForm title="New Email" name="new_email" type="email" placeholder='abc@gmail.com'  />

                </div>
                <div className='col-span-6'>
              <InputForm title="Confirm Email" name="confirm_email" type="email" placeholder='xyz@gmail.com' />

                </div>

            </div> */}
            <InputRow
            title1='New Email'
            name1='new_email'
            type1='email'
            placeholder1='abc@gmail.com'
            title2='Confirm Email'
            name2='confirm_email'
            type2='email'
            placeholder2='xyz@gmail.com'
            />
            <ActionButton title='Save Changes' className='float-right'/>
       
        
        </section>
        </main>
    
  );
}
export default Page;
