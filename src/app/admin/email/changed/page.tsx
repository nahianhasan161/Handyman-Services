import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import InputRow from '@/components/Admin/Section/InputRow';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import EmailForm from '@/components/Admin/Pages/InputForm/EmailForm';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
  
  return  (
    <div className='space-y-4 h-screen  '>
         
           
              <Typography 
              Description='Changed Email'
              Type={HeadingType.h1}
              className='py-3'
              />
         
              <EmailForm/>
        </div>
    
  );
}
export default Page;
