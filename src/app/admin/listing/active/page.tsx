import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '@/components/Admin/Table/Table';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    
    const titles = ["Job Title", "Listing ID","Login of Post"];
    
    const informations = [['Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin','329765','22/05/2023']]
  return  (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Active Listing</h1>
        </div>
        <div>
           <Table titles={titles} informations={informations}/> 
        </div>
        </div>
    
  );
}
export default Page;
