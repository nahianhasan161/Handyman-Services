import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import InputRow from '@/components/Admin/Section/InputRow';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
  
  return  (
    <main>

    <div className=' h-screen flex flex-col m-10 min-w-[20rem]'>
         
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Changed Email</h1>
        </div>
        <div className='bg-white sm:p-5 p-3'>
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
        </div>
        </div>
    
    </main>
  );
}
export default Page;
