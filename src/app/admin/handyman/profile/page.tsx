

import React, { useState } from 'react';

import LoginDetails from '@/components/Admin/LoginDetails/LoginDetails';
type PageProps = {
    
};

const Page:React.FC<PageProps> = () => {
    
  const titles = ["IP Address", "Login Date","Login Time"];
    
  const informations = [['106.76.96.0','26/5/2023','6:00PM']]
    
    return (
        
        <main className="">
       
          <LoginDetails
          titles={titles}
          informations={informations}
          />

           

          
        </main>
    )
}
export default Page;