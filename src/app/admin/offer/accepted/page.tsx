import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import InputForm from '@/components/Admin/Input/InputForm';
import ReviewCart from '@/components/Admin/Cart/ReviewCart';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const titles = ["IP Address", "Login Date","Login Time"];
    
    const informations = ['106.76.96.0','26/5/2023','6:00PM']
    const infos = ['106.76.96.0','26/5/2023','6:00PM']
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Accepted Offers</h1>
        </div>
        {/* Content Part */}
            <div>
                <ReviewCart Titles={titles} Values={informations} Infos={infos} Status='Accepted'/>
            </div>
        </div>
        
    
  );
}
export default Page;
