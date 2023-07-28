 "use client"
import React,{useState} from 'react'

import Link from 'next/link';

import Profile from '../Avatar/Profile';

import Item from './Item';

import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import ActiveLink from '@/helper/enums/HandymanLink';
import LogoutItem from './LogoutItem';
import { RxHamburgerMenu } from 'react-icons/rx';
import HandymanLink from '@/helper/enums/HandymanLink';
import { usePathname } from 'next/navigation';


type HandymanLeftBarProps = {
  
};

const HandymanLeftBar:React.FC<HandymanLeftBarProps> = () => {
  
  
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
  const currentUrl = usePathname();
  
  return (
    <div className={` sm:basis-1/4 bg-white box-shadow-bottom mr-1`}>
    {/* <div className={`w-full  ${show? "sm:basis-1/4 " : " bg-[#F2F8FF]"} box-shadow-top`}> */}
     
         <div className=' pl-1 sm:pl-5 sm:py-5 '>
               {/* Hamburger Menu */}
               <span  className='sm:hidden blocks' onClick={()=>setIsExpand(!isExpand)}>
            <RxHamburgerMenu className="my-2 ml-1 " />
            </span>
            <div className='flex justify-between align-items-center'>

             <Profile 
             title='Paul Ben'
             subtitle='Wall Builder'
             image='/images/handymanAvatar.png'
             link='/handyman/email/change'
             textClassName={isExpand ? "block" :"hidden"}
                />
              {/* close btn */}
          
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* Items section */}
            
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                  
                  <Item link={HandymanLink.EditProfile}
                   title="Edit Profile"
                   icon={"write-compose-pencil-edit-message-icon-1.png"}
                   active={HandymanLink.EditProfile == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />
                  <Item link={HandymanLink.PaymentPackages}
                   title="Payment Packages"
                   icon={"cash-money-payment-wallet-icon-1.png"}
                   active={HandymanLink.PaymentPackages == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />
                 <Item  link={HandymanLink.OffersByEmail}
                  title={"Receive offer by email"}
                  icon={"email-icon-2.png"}
                  active={HandymanLink.OffersByEmail == currentUrl}
                  textClassName={isExpand ? "block" :"hidden"}
                  /> 
                  <Item link={HandymanLink.ChangeEmail}
                   title={"Change Email"}
                   icon={"email-icon-1.png"} 
                   active={HandymanLink.ChangeEmail == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                     /> 
                  <Item link={HandymanLink.PasswordChange}
                   title={"Change Password"} 
                  icon={"security-unlock-password-protection-safety-icon-1.png"}
                  active={HandymanLink.PasswordChange == currentUrl}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                 <Item link={HandymanLink.Messages}
                    title="Messages"  
                    icon={"envelope-mail-mobile-ui-message-email-icon-1.png"}
                    active={HandymanLink.Messages == currentUrl}
                    textClassName={isExpand ? "block" :"hidden"}
                    />  
                 <Item link={HandymanLink.Orders} 
                   title="Orders" 
                   icon={"order-confirmation-application-check-smartphone-icon-1.png"}  
                   active={HandymanLink.Orders== currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
          
    </div>
    

    <LogoutItem
    textClassName={isExpand ? "block" :"hidden"}
    />
    </div>
                  
);
}
export default HandymanLeftBar;
