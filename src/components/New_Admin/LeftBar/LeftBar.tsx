'use client'
import React,{useEffect, useState} from 'react'

import Link from 'next/link';
import {useRouter,usePathname} from "next/navigation"


import {CgProfile} from "react-icons/cg";
import Profile from '@/components/Admin/Avatar/Profile';
import {RxCross1, RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import Item from '@/components/Admin/LeftBar/Item';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import AdminLink from '@/helper/enums/AdminLink';
import ActiveLink from '@/helper/enums/HandymanLink';
import LogoutItem from '@/components/Admin/LeftBar/LogoutItem';
import NewAdminLink from '@/helper/enums/NewAdminLink';


type LeftBarProps = {
  
};

const LeftBar:React.FC<LeftBarProps> = () => {
    const currentUrl = usePathname();
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
  /* useEffect(()=>{

  }) */
  
  return (
    <div className={` sm:basis-1/4  box-shadow-top transition-all  ease-in-out mr-1`}>
    
      
     
      
      
        <div className=' sm:py-3 md:py-5 '>
          
              {/* Hamburger Menu */}
            <span className='sm:hidden block'  onClick={()=>setIsExpand(!isExpand)}>
            <RxHamburgerMenu className="my-2 ml-1" />
            </span>
            <div className='flex justify-between align-items-center'>


             <Profile title='Admin'
              subtitle='Jhon Doe'
               image='/images/avatar1.png'
                link='/admin'
                textClassName={isExpand ? "block" :"hidden"}
                />
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* client section */}
           
             
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                 
                  <Item link={NewAdminLink.UserManagment} 
                   title="User Managment"
                   active={NewAdminLink.UserManagment == currentUrl}
                   icon={"user_managment.svg"}
                   textClassName={isExpand ? "block" :"hidden"} 
                    />
                  <Item 
                   link={NewAdminLink.JobPosting}
                   title="Jobs Posting" 
                   active={NewAdminLink.JobPosting == currentUrl}
                   icon={"job_posting.svg"}
                   textClassName={isExpand ? "block" :"hidden"}  
                     />
                  <Item
                   title={"Handyman Verification"}
                   icon={"verification.svg"}
                   link={NewAdminLink.HandymanVerification}
                   active={NewAdminLink.HandymanVerification == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   /> 
                  <Item title={"Payments"}
                   icon={"cash-money-payment-wallet-icon-1.png"}
                   link={NewAdminLink.Payments}
                   active={NewAdminLink.Payments == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   /> 
                  <Item 
                  title={"Messages"} 
                  link={NewAdminLink.Messages} 
                  active={NewAdminLink.Messages == currentUrl}
                  icon={"messageIcon.svg"}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                  <Item 
                   title="Statistics and Analytics"
                   icon={"statistics.svg"}
                   link={NewAdminLink.StatisticsandAnalytics}
                   active={NewAdminLink.StatisticsandAnalytics == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 
                  
                </ul>
            </div>
            </div>
          
    </div>
    

    <LogoutItem
    textClassName={isExpand ? "block" :"hidden"}
    />
    </div>
                  
);
}
export default LeftBar;
