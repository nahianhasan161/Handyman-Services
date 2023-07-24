import StatusSection from '@/components/Admin/Section/StatusSection';
import React from 'react';

type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
   
  return  (
    <div className=' h-screen flex flex-col m-10 '>

          
        {/* Content Part */}
            <div className='mt-5 w-full flex flex-col sm:flex-row justify-between items-center'>
             <StatusSection title='Verify Account' description='Verify the account' btnTitle='Verify Account'/>
             <StatusSection title='Active Account' description='Active the account' btnTitle='Active Account'/>
             <StatusSection title='Deactive Account' description='Deactive the account' btnTitle='Deactive Account'/>

            </div>
        </div>
        
    
  );
}
export default Page;
