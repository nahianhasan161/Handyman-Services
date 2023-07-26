import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import OffersSection from '@/components/Admin/Section/OffersSection';
import AcceptedOfferCardList from '@/components/Admin/Pages/Offer/AcceptedOfferCardList';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    
  return  (
    <div className='space-y-4 h-screen '>

            {/* Heading Part */}
            
           <AcceptedOfferCardList/>
        </div>
        
    
  );
}
export default Page;
