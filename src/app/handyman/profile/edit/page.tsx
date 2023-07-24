import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ProfileImage from '@/components/Admin/Avatar/ProfileImage';
import Image from 'next/image';
import ActionButton from '@/components/Admin/Button/ActionButton';
import InputBordered from '@/components/Admin/Input/inputBordered';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    
  return  (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div className='bottom-0 right-0 relative max-w-[7rem]'>
                <ProfileImage image='/images/handymanAvatar.png'/>
                {/* TODO:Make this as input fild */}
                <Image src="/icons/edit-image-icon-1.png"
                 className='absolute bottom-[5px] right-[15px]' alt="camera_icon" height={30} width={30}/>
        {/*  <h1 className='text-xl md:text-2xl font-bold py-3'>Changed Email</h1> */}
        </div>
                 {/* TODO:Make this Responsive input fild */}
        <div className='bg-white  pb-3'>
            <div className='mb-3'>
            <div className='grid grid-cols-12  items-center  min-w-[40rem] '>
                <InputBordered type='text' name='company_name' 
                className='col-span-4' 
                placeholder='Company Name'
                />
                <InputBordered type='text' name='surname' 
                className='col-span-4' 
                placeholder='SurName'
                />
                <InputBordered type='text' name='last_name' 
                className='col-span-4' 
                placeholder='Last Name'
                />
                
                
                {/* <input type="text"
                 className='col-span-4 border p-3'
                 placeholder='Address'
                 
                 /> */}
            </div>
            <div className='grid grid-cols-12  items-center  min-w-[40rem]'>
            <InputBordered type='text' name='address' 
                className='col-span-8' 
                placeholder='Address'
                />
            <InputBordered type='number' name='zip_code' 
                className='col-span-4' 
                placeholder='Zip code'
                />
               
                
            </div>
            </div>
            <ActionButton title='Save Changes' className='float-right mr-3'/>
        </div>
        </div>
    
  );
}
export default Page;
