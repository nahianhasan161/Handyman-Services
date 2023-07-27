 "use client"
import React,{useState} from 'react'

import Link from 'next/link';

import Profile from '../Avatar/Profile';

import Item from './Item';

import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import ActiveLink from '@/helper/enums/ActiveLink';
import LogoutItem from './LogoutItem';
import { RxHamburgerMenu } from 'react-icons/rx';


type HandymanLeftBarProps = {
  
};

const HandymanLeftBar:React.FC<HandymanLeftBarProps> = () => {
  
  
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
  const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
  const currentPage = fullUrl.split("/handyman/").pop()
  console.log('Current page:', currentPage );
  return (
    <div className={` sm:basis-1/4 bg-white box-shadow-bottom mr-1`}>
    {/* <div className={`w-full  ${show? "sm:basis-1/4 " : " bg-[#F2F8FF]"} box-shadow-top`}> */}
     
         <div className=' pl-1 sm:pl-5 sm:py-5 '>
               {/* Hamburger Menu */}
               <span  className='sm:hidden blocks' onClick={()=>setIsExpand(!isExpand)}>
            <RxHamburgerMenu class="my-2 ml-1 " />
            </span>
            <div className='flex justify-between align-items-center'>

             <Profile 
             title='Paul Ben'
             subtitle='Wall Builder'
             image='/images/handymanAvatar.png'
             link='/handyman/email/change'
             textClassName={isExpand ? "hidden" :" "}
                />
              {/* close btn */}
          
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* Items section */}
            
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                  
                  <Item link={'/handyman/profile/edit'}
                   title="Edit Profile"
                   icon={"write-compose-pencil-edit-message-icon-1.png"}
                   active={currentPage == ActiveLink.editProfile}
                   textClassName={isExpand ? "hidden" :" "}
                   />
                  <Item link={'/handyman/payment/packages'}
                   title="Payment Packages"
                   icon={"cash-money-payment-wallet-icon-1.png"}
                   active={currentPage == ActiveLink.paymentPakages}
                   textClassName={isExpand ? "hidden" :" "}
                   />
                 <Item  link={"/handyman/offers/byemail"}
                  title={"Receive offer by email"}
                  icon={"email-icon-2.png"}
                  active={currentPage == ActiveLink.byemail}
                  textClassName={isExpand ? "hidden" :" "}
                  /> 
                  <Item link={"/handyman/email/change"}
                   title={"Change Email"}
                   icon={"email-icon-1.png"} 
                   active={currentPage == ActiveLink.changeEmail}
                   textClassName={isExpand ? "hidden" :" "}
                     /> 
                  <Item link={"/handyman/password/change"}
                   title={"Change Password"} 
                  icon={"security-unlock-password-protection-safety-icon-1.png"}
                  active={currentPage == ActiveLink.changePassword}
                  textClassName={isExpand ? "hidden" :" "}
                  />  
                 <Item link={"/handyman/messages"}
                    title="Messages"  
                    icon={"envelope-mail-mobile-ui-message-email-icon-1.png"}
                    active={currentPage == ActiveLink.messages}
                    textClassName={isExpand ? "hidden" :" "}
                    />  
                 <Item link={"/handyman/orders"} 
                   title="Orders" 
                   icon={"order-confirmation-application-check-smartphone-icon-1.png"}  
                   active={currentPage == ActiveLink.orders}
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
export default HandymanLeftBar;
