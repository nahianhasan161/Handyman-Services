import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    return  (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Changed Email</h1>
        </div>
        <div className='bg-white sm:p-5 p-3'>
            <div className='grid grid-cols-12 gap-2 items-center pb-5 pr-[4rem] pl-[2rem] min-w-[40rem]'>
                <div className='col-span-6'>
           <InputForm title="Old Password" name="old_Password" type="password" placeholder='********'  />

                </div>
                <div className='col-span-6'>
           <InputForm title="New Password" name="new_Password" type="password" placeholder='********' />

                </div>

            </div>
            <ActionButton title='Save Changes' className='float-right'/>
        </div>
        </div>
    
  );
}
export default Page;
