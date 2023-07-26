import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
import OffersSection from '@/components/Admin/Section/OffersSection';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import UnAcceptedOfferCardList from '@/components/Admin/Pages/Offer/UnAcceptedOfferCardList';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
   
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
           <UnAcceptedOfferCardList/>
        </div>
        
    
  );
}
export default Page;
