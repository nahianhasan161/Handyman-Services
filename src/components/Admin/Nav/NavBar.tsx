 "use client"
import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import {BsArrowLeft,BsArrowLeftShort} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
import avatarImg from "@/../public/avatar.png";

import NotificationList from '@/components/Notification/NotificationList';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ActionButton from '../Button/ActionButton';
type NavBarProps = {
  isMessage?:boolean,
  isDeleteBtn?:boolean,
};

const NavBar:React.FC<NavBarProps> = ({isMessage=false,isDeleteBtn=false}) => {
    const [noftify,setNoftify] = useState(false);
    const [message,setMessage] = useState(false);

    const router = useRouter();
    

    const handleBack=()=>{
      router.back();
    }

    return (
        <div>
            <nav className='p-5 border-2 box-shadown-bottom'>
                <ul className='flex justify-between items-center font-bold text-md sm:text-lg'>
                   {/* <Link href={"/"}> */} <li className='flex items-center gap-1 cursor-pointer p-3  '
                   onClick={handleBack}
                   >
                       <span>
                       <Image src={"/icons/left_arrow.svg"} alt='arrow_icon' width={40} height={40} className='w-5 sm:w-10'></Image>
                    {/*  <BsArrowLeftShort size={40}/>  */}
                     {/* <BsArrowLeft size={40}/>  */}
                        </span> <label className='cursor-pointer'>Return</label> 
                    </li>
                    {/* </Link> */}
                    <Link href={"/admin"}> <li className='font-bold cursor-pointer text-sm sm:text-md md:text-lg'>
                        Dashboard
                    </li>
                    </Link>
                    <li>
                        <div className=' flex gap-5'>
                     {/* message */}
                         {isMessage && (<div className="relative inline-flex w-fit active:bg-slate-400  rounded ">
                          <div
                            className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-orange-400 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                            3
                          </div>
                          <button type="button"
                            onClick={()=> 
                              { setNoftify(!noftify)
                              setMessage(!message)}
                          }
                            >
                           
                          
                          <Image src="/icons/messageIcon.svg" alt='bell_icon' width={30} height={30} className='min-w-[5px]'></Image>
                            
                        </button>
                      </div>)}
{/* notify */}
                        <div className="relative inline-flex w-fit active:bg-slate-400  rounded ">
                          <div
                            className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-orange-400 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                            4
                          </div>
                          <button
                            type="button"
                            onClick={()=>
                             { setNoftify(!noftify)
                              setMessage(!message)}
                          }
                            >
                           
                          
                          <Image src="/icons/ring_icon.png" alt='bell_icon' width={30} height={30} className='min-w-[5px]'></Image>
                            
                        </button>
                      </div>
                      
                      <div>
                          { isDeleteBtn && (<ActionButton title='Delete Account' className=''/>)}
                      </div>
                          <div>
                                {isMessage &&   <NotificationList isShown={message}/> }
                            
                              <NotificationList isShown={noftify}/>


                            
                          </div>
                        </div>
                    </li>
                </ul>
            </nav>
          
        </div>
    );
}
export default NavBar;