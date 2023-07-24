import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import SendOfferCardList from '@/components/Admin/Lists/SendOfferCardList';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
            <div>
         
         <Typography
         Type={HeadingType.h1}
         Description='Sent Offers'
         className='font-bold'
         />
        </div>
        {/* Content Part */}
            <SendOfferCardList/>
        </div>
        
    
  );
}
export default Page;
