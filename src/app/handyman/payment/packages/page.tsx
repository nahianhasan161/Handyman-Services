import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import PackageCard from '@/components/Handyman/Card/PackageCard';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <div className=' h-screen flex flex-col m-10 text-offwhite_50'>
         
        <div className=' sm:p-5 p-3'>
            
            <div className='flex gap-3 w-full'>
            <PackageCard title='3-Month Subscription' amount='$20' className='flex-1'/>
            <PackageCard title='6-Month Subscription' amount='$40' className='flex-1'/>
            <PackageCard title='1-Year Subscription' amount='$80' className='flex-1'/>
            </div>
        </div>
        </div>
    
  );
}
export default Page;
