import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import InputRow from '@/components/Admin/Section/InputRow';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
  
  return  (
    <div className='space-y-4 h-screen  '>
         
            <div>
         <h1 className='text-md sm:text-lg md:text-2xl font-bold py-3'>Changed Email</h1>
        </div>
        <div className='bg-white pb-10'>
           
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
