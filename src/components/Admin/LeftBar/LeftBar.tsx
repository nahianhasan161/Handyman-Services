'use client'
import React,{useEffect, useState} from 'react'

import Link from 'next/link';
import {useRouter,usePathname} from "next/navigation"
import Profile from '../Avatar/Profile';
import {CgProfile} from "react-icons/cg";
import Item from './Item';
import {RxCross1, RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';
import LogoutItem from './LogoutItem';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import AdminLink from '@/helper/enums/AdminLink';
import ActiveLink from '@/helper/enums/HandymanLink';


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
            <Typography 
            Type={HeadingType.h2}
            Description='Client Section'
            className={isExpand ? "block" :"hidden sm:block"}
            />
             
            <div className='my-3 sm:my-5 md:my-7  sm:pl-5 md:pl-8'>
                <ul>
                 
                  <Item link={AdminLink.Home} 
                   title="Client Profile"
                   active={AdminLink.Home == currentUrl}
                   icon={"account-avatar-head-person-profile-icon-2.png"}
                   textClassName={isExpand ? "block" :"hidden"} 
                    />
                  <Item 
                   link={AdminLink.LoginDetails}
                   title="Login Details" 
                   active={AdminLink.LoginDetails == currentUrl}
                   icon={"account-door-enter-login-icon-1.png"}
                   textClassName={isExpand ? "block" :"hidden"}  
                     />
                  <Item
                   title={"Active Listing"}
                   icon={"accept-approved-check-checked-confirm-icon-2.png"}
                   link={AdminLink.ActiveListing}
                   active={AdminLink.ActiveListing == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   /> 
                  <Item title={"Change Email"}
                   icon={"email-icon-1.png"}
                   link={AdminLink.EmailChanged}
                   active={AdminLink.EmailChanged == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   /> 
                  <Item 
                  title={"Accepted Offers"} 
                  link={AdminLink.OfferAccepted} 
                  active={AdminLink.OfferAccepted == currentUrl}
                  icon={"accept-approved-check-checked-confirm-icon-2.png"}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                  <Item 
                   title="Review Section"
                   icon={"bookmark-favorite-rank-rating-star-icon-1.png"}
                   link={AdminLink.AdminReview}
                   active={AdminLink.AdminReview == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                  <Item 
                   title="Un Accepted Offers"
                   icon={"cancel-close-cross-delete-reject-icon-1.png"}
                   link={AdminLink.OfferUnAccepted}
                   active={AdminLink.OfferUnAccepted == currentUrl}
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
                    
                  
                 <Item 
                    title="Handyman Profile" 
                    icon={"account-avatar-head-person-profile-icon-2.png"}
                    link={AdminLink.HandymanProfile}
                    active={AdminLink.HandymanProfile == currentUrl}
                     textClassName={isExpand ? "block" :"hidden"}
                     />
                 <Item 
                    title="Login Details"  
                    icon={"account-door-enter-login-icon-1.png"}
                    link={AdminLink.HandymanDetails} 
                    active={AdminLink.HandymanDetails == currentUrl}
                    textClassName={isExpand ? "block" :"hidden"}
                    /> 
                 <Item 
                    title="Active Listing"  
                    icon={"accept-approved-check-checked-confirm-icon-2.png"}
                    link={AdminLink.HandymanActiveListing}
                    active={AdminLink.HandymanActiveListing == currentUrl}
                    textClassName={isExpand ? "block" :"hidden"}
                    />  
                 <Item 
                   title="Sent Offers"  
                   icon={"sent-icon-1.png"}
                   link={AdminLink.HandymanAcceptedOffer} 
                   active={AdminLink.HandymanAcceptedOffer == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 <Item 
                  title="Accepted Offers"  
                  icon={"accept-approved-check-checked-confirm-icon-2.png"}
                  link={AdminLink.HandymanAcceptedOffer} 
                  active={AdminLink.HandymanAcceptedOffer == currentUrl}
                  textClassName={isExpand ? "block" :"hidden"}
                  />  
                
                 <Item 
                   title="Un Accepted Offers" 
                   icon={"cancel-close-cross-delete-reject-icon-1.png"}
                   link={AdminLink.HandymanUnAcceptedOffer} 
                   active={AdminLink.HandymanUnAcceptedOffer == currentUrl}
                    textClassName={isExpand ? "block" :"hidden"}
                    />  
                 <Item 
                   title="Ratings"  
                   icon={"bookmark-favorite-rank-rating-star-icon-1.png"}
                   link={AdminLink.HandymanRating} 
                   active={AdminLink.HandymanRating == currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 <Item 
                   title="Activation Setting"  
                   icon={"unnamed.svg"}
                   link={AdminLink.HandymanAccountVerify} 
                   active={AdminLink.HandymanAccountVerify== currentUrl}
                   textClassName={isExpand ? "block" :"hidden"}
                   />  
                 <Item 
                    title="Uploaded Documents" 
                    icon={"cloud-upload-icon-1.png"}
                    link={AdminLink.HandymanDocumentUploaded}
                    active={AdminLink.HandymanDocumentUploaded == currentUrl}
                     textClassName={isExpand ? "block" :"hidden"}
                     />  
                 <Item 
                   title="All New Profile" 
                   icon={"account-avatar-head-person-profile-icon-2.png"}
                   link={AdminLink.HandymanNewProfile} 
                   active={AdminLink.HandymanNewProfile == currentUrl}
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
