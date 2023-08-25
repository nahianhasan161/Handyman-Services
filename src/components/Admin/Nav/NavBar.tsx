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
import DeleteBtn from './DeleteBtn';
import NavTitle from './NavTitle';
import HeadingType from '@/helper/enums/HeadingType';
type NavBarProps = {
  isMessage?:boolean,
  isDeleteBtn?:boolean,
  title?:string,
  
};

const NavBar:React.FC<NavBarProps> = ({isMessage=false,isDeleteBtn=false,title}) => {
    const [noftify,setNoftify] = useState(false);
    const [message,setMessage] = useState(false);

    const router = useRouter();
    

    const handleBack=()=>{
      router.back();
    }

    return (
        <div>
          
            <nav className='sm:p-5 box-shadow-top mb-1 '>
                <ul className='flex justify-between gap-5 items-center font-bold text-md sm:text-lg'>
                   {/* <Link href={"/"}> */} <li className='flex items-center gap-1 cursor-pointer p-3  '
                   onClick={handleBack}
                   >
                       <span>
                       <Image src={"/icons/left_arrow.svg"} alt='arrow_icon' width={40} height={40} className='min-w-[20px] sm:w-10'></Image>
                    
                        </span> <label className='cursor-pointer sm:text-base text-xs sm:text-md'>Return</label> 
                    </li>
                    {/* </Link> */}
                    <NavTitle title={title? title : "Dashbord"} link='"/admin"'/>
                    <li>
                        <div className=' flex gap-1 sm:gap-5'>
                     {/* message */}
                         {isMessage && (<div className="relative inline-flex w-fit active:bg-slate-400  rounded ">
                          <div
                            className="absolute bottom-auto left-auto right-0 top-2 sm:top-0 z-10
                             inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100
                              scale-y-100 whitespace-nowrap rounded-full bg-orange-400 px-1.5 sm:px-2.5 py-1 
                              text-center align-baseline text-xs font-bold leading-none text-white">
                            3
                          </div>
                          <button type="button"
                            onClick={()=> 
                              { setNoftify(!noftify)
                              setMessage(!message)}
                          }
                            >
                           
                          
                          <Image src="/icons/messageIcon.svg" alt='bell_icon' width={30} height={30} className='min-w-[15px]'></Image>
                            
                        </button>
                      </div>)}
{/* notify */}
                        <div className="relative inline-flex w-fit active:bg-slate-400  rounded ">
                          <div
                            className="absolute bottom-auto
                             left-auto right-0 top-2  sm:top-0 z-10 inline-block 
                             -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 
                             scale-y-100 whitespace-nowrap rounded-full bg-orange-400 px-1.5 sm:px-2.5  py-1 
                             text-center align-baseline text-xs font-bold leading-none text-white">
                            4
                          </div>
                          <button
                            type="button"
                            onClick={()=>
                             { setNoftify(!noftify)
                              setMessage(!message)}
                          }
                            >
                           
                          
                          <Image src="/icons/ring_icon.png" alt='bell_icon' width={30} height={30} className='min-w-[15px]'></Image>
                            
                        </button>
                      </div>
                      
                      <div>
                          { isDeleteBtn && (<DeleteBtn title='Delete Account'/>)}
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