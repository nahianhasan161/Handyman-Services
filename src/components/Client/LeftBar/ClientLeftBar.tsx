"use client"
import React,{useState} from 'react'

import Link from 'next/link';


import Profile from '@/components/Admin/Avatar/Profile';

import Item from '@/components/Admin/LeftBar/Item';

import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import ActiveLink from '@/helper/enums/ActiveLink';
import LogoutItem from '@/components/Admin/LeftBar/LogoutItem';
import { RxHamburgerMenu } from 'react-icons/rx';


type ClientLeftBarProps = {
  
};

const ClientLeftBar:React.FC<ClientLeftBarProps> = () => {
  
  
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
  
  const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
  const currentPage = fullUrl.split("/client/").pop()
  console.log('Current page:', currentPage );
  return (
    <div className={` sm:basis-1/4  box-shadow-top`}>
    {/* <div className={`w-full  ${show? "sm:basis-1/4 " : " bg-[#F2F8FF]"} box-shadow-top`}> */}
     
                {/* menu */}
                <span  className='sm:hidden block' onClick={()=>setIsExpand(!isExpand)}>
            <RxHamburgerMenu class="my-2 ml-1" />
            </span>
                <div className=' sm:py-3 md:py-5 '>
              
          
            <div className='flex justify-between align-items-center'>

             <Profile title='Paul Ben'
              subtitle='Wall Builder'
               image='/images/handymanAvatar.png'
                link='/handyman/email/change'
                textClassName={isExpand ? "hidden" :" "}
                />
             
          
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* Items section */}
            
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                  <Item link={'/client/handyman/find'}
                   title="Find Handyman"
                   icon={"handyman_find.svg"}
                   active={currentPage == ActiveLink.editProfile}
                   textClassName={isExpand ? "hidden" :" "}
                   />
                  <Item link={'/client/jobs/posted'}
                   title="Posted Jobs"
                   icon={"job_post.png"}
                   active={currentPage == ActiveLink.paymentPakages}
                   textClassName={isExpand ? "hidden" :" "}
                   />
               
                  <Item link={"/client/email/change"}
                   title={"Change Email"}
                   icon={"email-icon-1.png"} 
                   active={currentPage == ActiveLink.changeEmail}
                   textClassName={isExpand ? "hidden" :" "}
                     /> 
                  <Item link={"/client/password/change"}
                   title={"Change Password"} 
                  icon={"security-unlock-password-protection-safety-icon-1.png"}
                  active={currentPage == ActiveLink.changePassword}
                  textClassName={isExpand ? "hidden" :" "}
                  />  
                  <Item link={"/client/offers/accepted"}
                   title={"Accepted Offers"} 
                  icon={"accept-approved-check-checked-confirm-icon-1.png"}
                  active={currentPage == ActiveLink.changePassword}
                  textClassName={isExpand ? "hidden" :" "}
                  />  
                 <Item link={"/client/jobs/deleted"} 
                   title="Deleted Jobs" 
                   icon={"delete.svg"}  
                   active={currentPage == ActiveLink.orders}
                   textClassName={isExpand ? "hidden" :" "}
                   />
                 <Item link={"/client/messages"}
                    title="Messages"  
                    icon={"envelope-mail-mobile-ui-message-email-icon-1.png"}
                    active={currentPage == ActiveLink.messages}
                    textClassName={isExpand ? "hidden" :" "}
                    />  
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
          
    </div>
    

    <LogoutItem 
     textClassName={isExpand ? "hidden" :" "}
    />
    </div>
                  
);
}
export default ClientLeftBar;
