import React, { ReactNode } from 'react';
import InputForm from '@/components/Admin/Input/InputForm';
import ActionButton from '@/components/Admin/Button/ActionButton';
import InputRow from '@/components/Admin/Section/InputRow';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
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
        <div className='bg-white sm:p-5 p-3 mt-5'>
        <InputRow 
            name1='old_password'
            title1='Old Password'
            type1='password'
            placeholder1='********'
            name2='new_password'
            title2='New Password'
            type2='password'
            placeholder2='********'
            />
            <ActionButton title='Save Changes' className='float-right'/>
        </div>
        </div>
    
  );
}
export default Page;
