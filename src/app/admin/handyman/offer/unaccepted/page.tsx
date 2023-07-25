import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const Details = [["Job Title",'Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin'], ["Login Date",'26/5/2023'],["Login Time",'6:00PM']];
    
    
    const Logs = ['Posted on','26/5/2023','6:00PM']
  return  (
    <div className='m-10 '>

            {/* Heading Part */}
            <div>
         
         <Typography
         Type={HeadingType.h1}
         Description='Un Accepted Offers'
         className='font-bold'
         />
        </div>
        {/* Content Part */}
            <div className='flex items-center flex-col sm:flex-row gap-3 w-full'>
              <div className='flex-1'>
                <ReviewCart Details={Details}  Logs={Logs} Status='Un accepted'/>
              </div>
              <div className='flex-1'>

                <ReviewCart Details={Details}  Logs={Logs} Status='Un accepted'/>
              </div>
            </div>
        </div>
        
    
  );
}
export default Page;
