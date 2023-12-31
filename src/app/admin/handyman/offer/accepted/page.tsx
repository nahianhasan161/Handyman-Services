import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const Details = [["IP Address",'106.76.96.0'], ["Login Date",'26/5/2023'],["Login Time",'6:00PM']];
    
    
    const Logs = ['Posted on','26/5/2023','6:00PM']
  return  (
    <div className=' '>

            {/* Heading Part */}
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Accepted Offers</h1>
        </div>
        {/* Content Part */}
            <div className='flex items-center gap-3 w-full flex-col sm:flex-row'>
              <div className='flex-1'>
                <ReviewCart Details={Details}  Logs={Logs} Status='Accepted'/>
              </div>
              <div className='flex-1'>

                <ReviewCart Details={Details}  Logs={Logs} Status='Accepted'/>
              </div>
            </div>
        </div>
        
    
  );
}
export default Page;
