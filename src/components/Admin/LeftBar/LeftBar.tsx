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
    <div className={`w-full  ${show? "lg:basis-1/3 " : " bg-[#F2F8FF]"} box-shadow-top`}>
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

             <Profile/>
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
                    
                  
                  
                <Link className="cursor-pointer" href={"/admin"} 
                onClick={()=>{
                  setIsActive("homepage")
                }}
                >  <Item title="Client Profile" active={"homepage" == isAction} icon={"account-avatar-head-person-profile-icon-2.png"}/></Link>
                  
                <Link className="cursor-pointer" href={"/admin/login/details"} 
                onClick={()=>{
                  setIsActive("loginpage")
                }}
                
                >   <Item title="Login Details" active={"loginpage" == isAction}  icon={"account-door-enter-login-icon-1.png"}/> </Link>
                <Link className="cursor-pointer" href={"/admin/listing/active"}>  <Item title="Active Listing"  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/admin/email/changed"}>  <Item title="Change Email"  icon={"email-icon-1.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/admin/offer/accepted"}> <Item title="Accepted Offers"  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/admin/review"}>  <Item title="Review Section"  icon={"bookmark-favorite-rank-rating-star-icon-1.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/admin/prev-offer"}>  <Item title="Un Accepted Offers"  icon={"cancel-close-cross-delete-reject-icon-1.png"}/>  </Link>
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
            <div className='my-2 '>
            <h1 className=" my-3 ml-7 text-sm md:text-xl font-bold">Handyman Section</h1>
            <div className='my-3 sm:my-5 md:my-7 pl-2 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                  
                <Link className="cursor-pointer" href={"/profile"}>  <Item title="Handyman Profile"  icon={"account-avatar-head-person-profile-icon-2.png"}/></Link>
                  
                <Link className="cursor-pointer" href={"/login"}>   <Item title="Login Details"  icon={"account-door-enter-login-icon-1.png"}/> </Link>
                <Link className="cursor-pointer" href={"/admin/listing/active"}>  <Item title="Active Listing"  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/email"}>  <Item title="Send Offers"  icon={"sent-icon-1.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/offer"}> <Item title="Accepted Offers"  icon={"accept-approved-check-checked-confirm-icon-2.png"}/>  </Link>
                
                <Link className="cursor-pointer" href={"/prev-offer"}>  <Item title="Un Accepted Offers"  icon={"cancel-close-cross-delete-reject-icon-1.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/prev-offer"}>  <Item title="Ratings"  icon={"bookmark-favorite-rank-rating-star-icon-1.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/prev-offer"}>  <Item title="Activation Setting"  icon={"unnamed.svg"}/>  </Link>
                <Link className="cursor-pointer" href={"/prev-offer"}>  <Item title="Uploaded Documents"  icon={"cloud-upload-icon-1.png"}/>  </Link>
                <Link className="cursor-pointer" href={"/prev-offer"}>  <Item title="All New Profile"  icon={"account-avatar-head-person-profile-icon-2.png"}/>  </Link>
                  
                </ul>
                <Link className="cursor-pointer flex items-center gap-5 pl-7 mt-10" href={"/logout"}>
                  <span>

                  <Image src="/icons/close-exit-logout-power-icon-1.png" alt="logout_icon" height={15} width={15}
                  className='rounded-full outline outline-[10px] outline-[#E0DBDB]'
                  />
                  </span>
                  <h1 className='  text-xl  font-bold  text-[#0E172C]'>
                  Logout</h1></Link>
            </div>
                
            </div>
          
        </div>)}
    </div>
  );
}
export default LeftBar;
