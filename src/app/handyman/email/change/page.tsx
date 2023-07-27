import React, { ReactNode } from 'react';

import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import EmailForm from '@/components/Handyman/pages/form/EmailForm';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
  
  return  (
    <main>

    <div className=' h-screen flex flex-col '>
         
          <div className='mb-3'>
         <Typography 
         Type={HeadingType.h1}
         Description='Changed Email'
         className='font-bold '
         />
        </div>
        <EmailForm/>
        </div>
    
    </main>
  );
}
export default Page;
