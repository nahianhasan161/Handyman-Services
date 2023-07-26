import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const titles = ["Job Title", "Listing ID","Login of Post"];
    
    const informations = [['Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin','329765','22/05/2023']]
  return  (
    <div className=' h-screen flex flex-col  '>
         
            <div>
        
         <Typography 
         Type={HeadingType.h1}
         Description='Active Listing'
         className='font-bold'
         />
         
         
        </div>
        <div className='mt-5'>
           <Table titles={titles} informations={informations}/> 
        </div>
        </div>
    
  );
}
export default Page;
