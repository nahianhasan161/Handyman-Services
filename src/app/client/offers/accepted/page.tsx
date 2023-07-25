import React, { ReactNode } from 'react';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
 

  const Details = [["IP Address",'106.76.96.0'], ["Login Date",'26/5/2023'],["Login Time",'6:00PM']];
    
    
  const Logs = ['Posted on','26/5/2023','6:00PM']
return  (
  <div className=' h-screen flex flex-col m-2 md:m-5 lg:m-10 '>

          {/* Heading Part */}
          <div>
       
       <Typography 
       Type={HeadingType.h1}
       Description='Accepted Offers'

       />
      </div>
      {/* Content Part */}
          <div className='flex flex-col sm:flex-row items-center gap-3 w-full'>
            <div className='flex-1'>
              <ReviewCart Details={Details}  Logs={Logs} />
            </div>
            <div className='flex-1'>

              <ReviewCart Details={Details}  Logs={Logs}   />
            </div>
          </div>
      </div>
      
  
);
}
export default Page;
