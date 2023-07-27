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
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';


type LeftBarProps = {
  
};

const LeftBar:React.FC<LeftBarProps> = () => {
    
  const [isAction ,setIsActive] = useState("homepage");
  const [isExpand,setIsExpand] = useState(false);
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
            <Typography 
            Type={HeadingType.h2}
            Description='Client Section'
            className={isExpand ? "block" :"hidden sm:block"}
            />
             
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                 
                  <Item link={'/admin'} 
                   title="Client Profile"
                   active={"homepage" == isAction}
                   icon={"account-avatar-head-person-profile-icon-2.png"}
                   textClassName={isExpand ? "block" :"hidden"} 
                    />
                  <Item 
                   link={'/admin/login/details'}
                   title="Login Details" 
                   active={"loginpage" == isAction}
                   icon={"account-door-enter-login-icon-1.png"}
                   textClassName={isExpand ? "block" :"hidden"}  
                     />
                  <Item
                   title={"Active Listing"}
                   icon={"accept-approved-check-checked-confirm-icon-2.png"}
                   link={"/admin/listing/active"}
                   textClassName={isExpand ? "block" :"hidden"}
                   /> 
                  <Item title={"Change Email"}
                   icon={"email-icon-1.png"}
                   link={"/admin/email/changed"}
                   textClassName={isExpand ? "block" :"hidden"}
                   /> 
                  <Item 
                  title={"Accepted Offers"} 
                  link={"/admin/offer/accepted"} 
                  icon={"accept-approved-check-checked-confirm-icon-2.png"}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                  <Item link={"/admin/review"}
                   title="Review Section"
                   icon={"bookmark-favorite-rank-rating-star-icon-1.png"}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                  <Item link={"/admin/offer/unaccepted"}
                   title="Un Accepted Offers"
                   icon={"cancel-close-cross-delete-reject-icon-1.png"}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
            <div className='my-2 '>
            
            <Typography 
            Type={HeadingType.h2}
            Description='Handyman Section'
            className={isExpand ? "block" :"hidden sm:block"}
            />
            
            <div className='my-3 sm:my-5 md:my-7 pl-1 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                 <Item link={"/admin/handyman/profile"}
                    title="Handyman Profile" 
                     icon={"account-avatar-head-person-profile-icon-2.png"}
                     textClassName={isExpand ? "block" :"hidden"}
                     />
                 <Item link={"/admin/handyman/login/details"} 
                    title="Login Details"  
                    icon={"account-door-enter-login-icon-1.png"}
                    textClassName={isExpand ? "block" :"hidden"}
                    /> 
                 <Item link={"/admin/handyman/listing/active"}
                    title="Active Listing"  
                    icon={"accept-approved-check-checked-confirm-icon-2.png"}
                    textClassName={isExpand ? "block" :"hidden"}
                    />  
                 <Item link={"/admin/handyman/offer/sent"} 
                   title="Sent Offers"  
                   icon={"sent-icon-1.png"}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 <Item link={"/admin/handyman/offer/accepted"} 
                  title="Accepted Offers"  
                  icon={"accept-approved-check-checked-confirm-icon-2.png"}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                
                 <Item link={"/admin/handyman/offer/unaccepted"} 
                   title="Un Accepted Offers" 
                    icon={"cancel-close-cross-delete-reject-icon-1.png"}
                    textClassName={isExpand ? "block" :"hidden"}
                    />  
                 <Item link={"/admin/handyman/rating"} 
                   title="Ratings"  
                   icon={"bookmark-favorite-rank-rating-star-icon-1.png"}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 <Item link={"/admin/handyman/account/verify"} 
                   title="Activation Setting"  
                   icon={"unnamed.svg"}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 <Item link={"/admin/handyman/uploaded/documents"}
                    title="Uploaded Documents" 
                     icon={"cloud-upload-icon-1.png"}
                     textClassName={isExpand ? "block" :"hidden"}
                     />  
                 <Item link={"/admin/handyman/profile/new"} 
                   title="All New Profile" 
                   icon={"account-avatar-head-person-profile-icon-2.png"}
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
