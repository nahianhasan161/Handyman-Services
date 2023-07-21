import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const titles = ["IP Address", "Login Date","Login Time"];
    
    const informations = [['106.76.96.0','26/5/2023','6:00PM']]
  return  (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Changed Email</h1>
        </div>
        <div className='bg-white '>
            <div className='grid grid-cols-12 gap-2 items-center pb-5 pr-[4rem] pl-[2rem] min-w-[40rem]'>
                <div className='col-span-6'>
           <InputForm title="Old Email" name="old_email" type="email" placeholder='abc@gmail.com'  />

                </div>
                <div className='col-span-6'>
           <InputForm title="New Email" name="new_email" type="email" placeholder='xyz@gmail.com' />

                </div>

            </div>
        </div>
        </div>
    
  );
}
export default Page;
