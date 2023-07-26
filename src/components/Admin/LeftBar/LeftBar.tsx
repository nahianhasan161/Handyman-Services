 "use client"
import React,{useState} from 'react'

import Link from 'next/link';

import Profile from '../Avatar/Profile';
import {CgProfile} from "react-icons/cg";
import Item from './Item';
import {RxCross1, RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import LogoutItem from './LogoutItem';


type LeftBarProps = {
  
};

const LeftBar:React.FC<LeftBarProps> = () => {
    
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
  return (
    <div className={` sm:basis-1/4 bg-[#F2F8FF box-shadow-top transition-all  ease-in-out`}>
    
      
     
      
      
        <div className=' sm:py-3 md:py-5 '>
          
              {/* Hamburger Menu */}
            <span className='sm:hidden block'  onClick={()=>setIsExpand(!isExpand)}>
            <RxHamburgerMenu class="mt-2 ml-2" />
            </span>
            <div className='flex justify-between align-items-center'>


             <Profile title='Admin'
              subtitle='Jhon Doe'
               image='/images/avatar1.png'
                link='/admin'
                textClassName={isExpand ? "hidden" :" "}
                />
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* client section */}
              {!isExpand && (<h1 className=" my-5 ml-1 sm:ml-5 md:ml-7 text-xs sm:text-sm md:text-xl font-bold whitespace-nowrap">Client Section</h1>)}
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                 
                  <Item link={'/admin'} 
                   title="Client Profile"
                   active={"homepage" == isAction}
                   icon={"account-avatar-head-person-profile-icon-2.png"}
                   textClassName={isExpand ? "hidden" :" "} 
                    />
                  <Item 
                   link={'/admin/login/details'}
                   title="Login Details" 
                   active={"loginpage" == isAction}
                   icon={"account-door-enter-login-icon-1.png"}
                   textClassName={isExpand ? "hidden" :" "}  
                     />
                  <Item
                   title={"Active Listing"}
                   icon={"accept-approved-check-checked-confirm-icon-2.png"}
                   link={"/admin/listing/active"}
                   textClassName={isExpand ? "hidden" :" "}
                   /> 
                  <Item title={"Change Email"}
                   icon={"email-icon-1.png"}
                   link={"/admin/email/changed"}
                   textClassName={isExpand ? "hidden" :" "}
                   /> 
                  <Item 
                  title={"Accepted Offers"} 
                  link={"/admin/offer/accepted"} 
                  icon={"accept-approved-check-checked-confirm-icon-2.png"}
                  textClassName={isExpand ? "hidden" :" "}
                  />  
                  <Item link={"/admin/review"}
                   title="Review Section"
                   icon={"bookmark-favorite-rank-rating-star-icon-1.png"}
                   textClassName={isExpand ? "hidden" :" "}
                   />  
                  <Item link={"/admin/offer/unaccepted"}
                   title="Un Accepted Offers"
                   icon={"cancel-close-cross-delete-reject-icon-1.png"}
                   textClassName={isExpand ? "hidden" :" "}
                   />  
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
            <div className='my-2 '>
            {!isExpand && (<h1 className=" my-3  ml-1 sm:ml-5 md:ml-7 text-xs sm:text:lg md:text-xl font-bold">Handyman Section</h1>)}
            <div className='my-3 sm:my-5 md:my-7 pl-1 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                 <Item link={"/admin/handyman/profile"}
                    title="Handyman Profile" 
                     icon={"account-avatar-head-person-profile-icon-2.png"}
                     textClassName={isExpand ? "hidden" :" "}
                     />
                 <Item link={"/admin/handyman/login/details"} 
                    title="Login Details"  
                    icon={"account-door-enter-login-icon-1.png"}
                    textClassName={isExpand ? "hidden" :" "}
                    /> 
                 <Item link={"/admin/handyman/listing/active"}
                    title="Active Listing"  
                    icon={"accept-approved-check-checked-confirm-icon-2.png"}
                    textClassName={isExpand ? "hidden" :" "}
                    />  
                 <Item link={"/admin/handyman/offer/sent"} 
                   title="Sent Offers"  
                   icon={"sent-icon-1.png"}
                   textClassName={isExpand ? "hidden" :" "}
                   />  
                 <Item link={"/admin/handyman/offer/accepted"} 
                  title="Accepted Offers"  
                  icon={"accept-approved-check-checked-confirm-icon-2.png"}
                  textClassName={isExpand ? "hidden" :" "}
                  />  
                
                 <Item link={"/admin/handyman/offer/unaccepted"} 
                   title="Un Accepted Offers" 
                    icon={"cancel-close-cross-delete-reject-icon-1.png"}
                    textClassName={isExpand ? "hidden" :" "}
                    />  
                 <Item link={"/admin/handyman/rating"} 
                   title="Ratings"  
                   icon={"bookmark-favorite-rank-rating-star-icon-1.png"}
                   textClassName={isExpand ? "hidden" :" "}
                   />  
                 <Item link={"/admin/handyman/account/verify"} 
                   title="Activation Setting"  
                   icon={"unnamed.svg"}
                   textClassName={isExpand ? "hidden" :" "}
                   />  
                 <Item link={"/admin/handyman/uploaded/documents"}
                    title="Uploaded Documents" 
                     icon={"cloud-upload-icon-1.png"}
                     textClassName={isExpand ? "hidden" :" "}
                     />  
                 <Item link={"/admin/handyman/profile/new"} 
                   title="All New Profile" 
                   icon={"account-avatar-head-person-profile-icon-2.png"}
                   textClassName={isExpand ? "hidden" :" "}
                   />  
                  
                </ul>
          
            </div>
                
            
          
        </div>
    </div>
    

    <LogoutItem
    textClassName={isExpand ? "hidden" :" "}
    />
    </div>
                  
);
}
export default LeftBar;
