"use client"
import React,{useState} from 'react'

import Link from 'next/link';


import Profile from '@/components/Admin/Avatar/Profile';

import Item from '@/components/Admin/LeftBar/Item';

import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import ActiveLink from '@/helper/enums/HandymanLink';
import LogoutItem from '@/components/Admin/LeftBar/LogoutItem';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import ClientLink from '@/helper/enums/ClientLink';

type ClientLeftBarProps = {
  
};

const ClientLeftBar:React.FC<ClientLeftBarProps> = () => {
  
  
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
  const currentUrl = usePathname();
  return (
    <div className={` sm:basis-1/4  box-shadow-top mr-1`}>
    {/* <div className={`w-full  ${show? "sm:basis-1/4 " : " bg-[#F2F8FF]"} box-shadow-top`}> */}
     
                {/* menu */}
                <span  className='sm:hidden block' onClick={()=>setIsExpand(!isExpand)}>
            <RxHamburgerMenu className="my-2 ml-1" />
            </span>
                <div className=' sm:py-3 md:py-5 '>
              
          
            <div className='flex justify-between align-items-center'>

             <Profile title='Paul Ben'
              subtitle='Wall Builder'
               image='/images/handymanAvatar.png'
                link={ ClientLink.FindHandyman }
                
                textClassName={isExpand ? "block" :"hidden"}
                />
             
          
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* Items section */}
            
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                  <Item link={ClientLink.FindHandyman}
                   title="Find Handyman"
                   icon={"handyman_find.svg"}
                   active={ClientLink.FindHandyman == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />
                  <Item link={'/c{ ClientLink' }
                   title="Posted Jobs"
                   icon={"job_post.png"}
                   active={ ClientLink.JobsPosted == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />
               
                  <Item link={ClientLink.EmailChange}
                   title={"Change Email"}
                   icon={"email-icon-1.png"} 
                   active={ClientLink.EmailChange == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                     /> 
                  <Item link={ClientLink.ChnagePassword  }
                   title={"Change Password"} 
                  icon={"security-unlock-password-protection-safety-icon-1.png"}
                  active={ClientLink.ChnagePassword == currentUrl}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                  <Item link={ClientLink.OfferAccepted }
                   title={"Accepted Offers"} 
                  icon={"accept-approved-check-checked-confirm-icon-1.png"}
                  active={ClientLink.OfferAccepted == currentUrl}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                 <Item link={ClientLink.JobsDeleted}
                   title="Deleted Jobs" 
                   icon={"delete.svg"}  
                   active={ClientLink.JobsDeleted == currentUrl }
                   textClassName={isExpand ? "block" :"hidden"}
                   />
                 <Item link={ ClientLink.Messages}
                    title="Messages"  
                    icon={"envelope-mail-mobile-ui-message-email-icon-1.png"}
                    active={ClientLink.Messages == currentUrl }
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
export default ClientLeftBar;
