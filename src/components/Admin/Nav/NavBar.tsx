 "use client"
import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import {BsArrowLeft,BsArrowLeftShort} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
import avatarImg from "@/../public/avatar.png";

import {MdNotificationsNone} from "react-icons/md"
import {MdNotifications} from "react-icons/md"

import NotificationList from '@/components/Notification/NotificationList';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
type NavBarProps = {
 
};

const NavBar:React.FC<NavBarProps> = () => {
    const [visible,setVisible] = useState(false);
    const router = useRouter();
    const handleBack=()=>{
      router.back();
    }
    return (
        <div>
            <nav className='p-5 border-2 box-shadown-bottom'>
                <ul className='flex justify-between items-center font-bold  text-lg'>
                   {/* <Link href={"/"}> */} <li className='flex items-center gap-1 cursor-pointer p-3  '
                   onClick={handleBack}
                   >
                       <span>
                       <Image src={"/icons/left_arrow.svg"} alt='arrow_icon' width={40} height={40}></Image>
                    {/*  <BsArrowLeftShort size={40}/>  */}
                     {/* <BsArrowLeft size={40}/>  */}
                        </span> <label className='cursor-pointer'>Return</label> 
                    </li>
                    {/* </Link> */}
                    <Link href={"/admin"}> <li className='font-bold cursor-pointer' onClick={()=>{
                        
                    }}>
                        Dashboard
                    </li>
                    </Link>
                    <li>
                        <div className=''>
                     
                      <div className="relative inline-flex w-fit active:bg-slate-400  rounded ">
  <div
    className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-orange-400 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
    4
  </div>
  <button
    type="button"
    onClick={()=>
      setVisible(!visible)
  }
    >
      <span>
     {/*  {visible? (<MdNotifications size={30}/>) : (<MdNotificationsNone size={30}/>)} */}
     <Image src="/icons/ring_icon.png" alt='bell_icon' width={30} height={30}></Image>
      </span>
  </button>
</div>

                      <NotificationList isShown={visible}/>
                        </div>
                    </li>
                </ul>
            </nav>
          
        </div>
    );
}
export default NavBar;