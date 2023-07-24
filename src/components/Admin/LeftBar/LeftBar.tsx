 "use client"
import React,{useState} from 'react'

import Link from 'next/link';

import Profile from '../Avatar/Profile';
import {CgProfile} from "react-icons/cg";
import Item from './Item';
import {RxCross1} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image';


type LeftBarProps = {
  
};

const LeftBar:React.FC<LeftBarProps> = () => {
    
  const [isAction ,setIsActive] = useState("homepage");
  const [show ,setShow] = useState(true);
  return (
    <div className={` basis-1/4 bg-[#F2F8FF box-shadow-top`}>
    {/* <div className={`w-full  ${show? "sm:basis-1/4 " : " bg-[#F2F8FF]"} box-shadow-top`}> */}
      {!show && 
      <button className='' onClick={()=>{
        setShow(!show)
       }}>
        <span className=''>
        <AiOutlineMenu size={30}/>

        </span>
      </button>
      }
        {show && (<div className='py-5 pl-5 '>
          
            <div className='flex justify-between align-items-center'>

             <Profile title='Admin' subtitle='Jhon Doe' image='/images/avatar1.png' link='/admin'/>
              {/* close btn */}
            {/*  <div className='w-10 hover:scale-110 transition-all' >
             <span className="p-3 cursor-pointer  " onClick={()=>{
              setShow(!show)
             }}><RxCross1/></span>

             </div> */}
             {/* TODO:  MARGIN */}
            </div>
            <div className=''>
            {/* client section */}
            <h1 className=" my-5 ml-7 text-sm md:text-xl font-bold">Client Section</h1>
            <div className='my-3 sm:my-5 md:my-7 pl-2 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                  
                
                  <Item link={'/admin'} title="Client Profile" active={"homepage" == isAction} icon={"account-avatar-head-person-profile-icon-2.png"}/>
                  <Item link={'/admin/login/details'} title="Login Details" active={"loginpage" == isAction}  icon={"account-door-enter-login-icon-1.png"}/>
                 <Item title={"Active Listing"}  icon={"accept-approved-check-checked-confirm-icon-2.png"} link={"/admin/listing/active"}/> 
                  <Item title={"Change Email"}  icon={"email-icon-1.png"} link={"/admin/email/changed"}/> 
                  <Item title={"Accepted Offers"} link={"/admin/offer/accepted"}  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  
                 <Item link={"/admin/review"}   title="Review Section"  icon={"bookmark-favorite-rank-rating-star-icon-1.png"}/>  
                 <Item link={"/admin/offer/unaccepted"}   title="Un Accepted Offers"  icon={"cancel-close-cross-delete-reject-icon-1.png"}/>  
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
            <div className='my-2 '>
            <h1 className=" my-3 ml-7 text-sm md:text-xl font-bold">Handyman Section</h1>
            <div className='my-3 sm:my-5 md:my-7 pl-2 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                  
                 <Item link={"/admin/handyman/profile"}   title="Handyman Profile"  icon={"account-avatar-head-person-profile-icon-2.png"}/>
                  
                 <Item link={"/admin/handyman/login/details"}    title="Login Details"  icon={"account-door-enter-login-icon-1.png"}/> 
                 <Item link={"/admin/handyman/listing/active"}   title="Active Listing"  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  
                 <Item link={"/admin/handyman/offer/sent"}   title="Sent Offers"  icon={"sent-icon-1.png"}/>  
                 <Item link={"/admin/handyman/offer/accepted"}  title="Accepted Offers"  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  
                
                 <Item link={"/admin/handyman/offer/unaccepted"}   title="Un Accepted Offers"  icon={"cancel-close-cross-delete-reject-icon-1.png"}/>  
                 <Item link={"/admin/handyman/rating"}   title="Ratings"  icon={"bookmark-favorite-rank-rating-star-icon-1.png"}/>  
                 <Item link={"/admin/handyman/account/verify"}   title="Activation Setting"  icon={"unnamed.svg"}/>  
                 <Item link={"/admin/handyman/uploaded/documents"}   title="Uploaded Documents"  icon={"cloud-upload-icon-1.png"}/>  
                 <Item link={"/admin/handyman/profile/new"}   title="All New Profile"  icon={"account-avatar-head-person-profile-icon-2.png"}/>  
                  
                </ul>
          
            </div>
                
            
          
        </div>
    </div>)}
    

    <Link className="cursor-pointer flex items-center gap-5 pl-[5rem] my-3" href={"/logout"}>
                  <span>

                  <Image src="/icons/close-exit-logout-power-icon-1.png" alt="logout_icon" height={15} width={15}
                  className='rounded-full outline outline-[10px] outline-[#E0DBDB]'
                  />
                  </span>
                  <h1 className='  text-xl  font-bold  text-[#0E172C]'>
                  Logout</h1></Link> 
    </div>
                  
);
}
export default LeftBar;
