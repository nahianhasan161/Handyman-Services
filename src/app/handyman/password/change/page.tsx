import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import InputRow from '@/components/Admin/Section/InputRow';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import PasswordForm from '@/components/Handyman/pages/form/PasswordForm';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    return  (
    <div className='  flex flex-col '>
         
            <div>
         
         <Typography
         Type={HeadingType.h1}
         Description='Change Password'
         className='font-bold'
         />
        </div>
        <PasswordForm/>
        </div>
    
  );
}
export default Page;
