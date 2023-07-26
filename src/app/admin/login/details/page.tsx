

import React, { useState } from 'react';
import NavBar from '@/components/Admin/Nav/NavBar';
import LeftBar from '@/components/Admin/LeftBar/LeftBar'
import Main from '@/components/Admin/Main/Mian';
import LoginDetails from '@/components/Admin/LoginDetails/LoginDetails';
type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
  const titles = ["IP Address", "Login Date","Login Time"];
    
  const informations = [['106.76.96.0','26/5/2023','6:00PM']]
    
    
    return (
        
        <main className="space-y-4 h-screen">
       
          <LoginDetails
          titles={titles}
          informations={informations}
          />

           

          
        </main>
    )
}
export default page;