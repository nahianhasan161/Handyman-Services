import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ProfileImage from '@/components/Admin/Avatar/ProfileImage';
import Image from 'next/image';
import ActionButton from '@/components/Admin/Button/ActionButton';
import InputBordered from '@/components/Admin/Input/inputBordered';
import ProfileSection from '@/components/Handyman/Profile/ProfileSection';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    
  return  (
    <div className=' h-screen flex flex-col m-10 '>
        <ProfileSection/>
        </div>
    
  );
}
export default Page;
