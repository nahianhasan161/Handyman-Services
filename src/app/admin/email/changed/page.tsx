import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import InputRow from '@/components/Admin/Section/InputRow';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
  
  return  (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Changed Email</h1>
        </div>
        <div className='bg-white pb-10'>
            {/* <div className='grid grid-cols-1 md:grid-cols-12 gap-2 items-center pb-5 lg:pr-[4rem]  pr-[2rem] pl-[2rem] min-w-[40rem]'>
                <div className='col-span-6'>
           <InputForm title="Old Email" name="old_email" type="email" placeholder='abc@gmail.com'  />

                </div>
                <div className='col-span-6'>
           <InputForm title="New Email" name="new_email" type="email" placeholder='xyz@gmail.com' />

                </div>

            </div> */}
            <InputRow 
            name1='old_email'
            title1='Old Email'
            type1='email'
            placeholder1='abc@gmail.com'
            name2='new_email'
            title2='New Email'
            type2='email'
            placeholder2='xyz@gmail.com'
            />
            
          
        </div>
        </div>
    
  );
}
export default Page;
