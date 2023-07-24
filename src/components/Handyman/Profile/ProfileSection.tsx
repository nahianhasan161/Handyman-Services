import ProfileImage from '@/components/Admin/Avatar/ProfileImage';
import ActionButton from '@/components/Admin/Button/ActionButton';
import InputBordered from '@/components/Admin/Input/inputBordered';
import Image from 'next/image';
import React from 'react';

type ProfileSectionProps = {
    
};

const ProfileSection:React.FC<ProfileSectionProps> = () => {
    
    return ( <>

         
            <div className='bottom-0 right-0 relative max-w-[7rem]'>
                <ProfileImage image='/images/handymanAvatar.png'/>
               
                <Image src="/icons/edit-image-icon-1.png"
                 className='absolute bottom-[5px] right-[15px]' alt="camera_icon" height={30} width={30}/>
       
        </div>
                 
        <div className='bg-white  pb-3'>
            <div className='mb-3'>
            <div className='grid grid-cols-1  sm:grid-cols-12  items-center  min-w-[40rem] '>
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
                
                
             
            </div>
            <div className='grid grid-cols-1  sm:grid-cols-12  items-center  min-w-[40rem]'>
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
        </>)
}
export default ProfileSection;