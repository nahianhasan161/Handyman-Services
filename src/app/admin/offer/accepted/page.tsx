import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import OffersSection from '@/components/Admin/Section/OffersSection';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const Details = [["IP Address",'106.76.96.0'], ["Login Date",'26/5/2023'],["Login Time",'6:00PM']];
    
    
    const Logs = ['Posted on','26/5/2023','6:00PM']
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
            
            <div className='py-3'>
         <Typography Type={HeadingType.h1} Description='Accepted Offers' className='font-bold'/>
        </div>
        {/* Content Part */}
           <OffersSection 
           Details={Details} 
           Logs={Logs}
           Status='Accepted'
           />
        </div>
        
    
  );
}
export default Page;
