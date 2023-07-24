import React from 'react'
import {CgProfile} from "react-icons/cg"
import Link from 'next/link';
import Image from 'next/image';
type ItemProps = {
    title:string,
    icon:string,
    active?:boolean,
    link:string,
    
};

const Item:React.FC<ItemProps> = ({title,icon,active=false,link}) => {
    

  return (
    <>
      <Link className="cursor-pointer" href={link}> 
      <li 
      className={`${active ? "bg-[#FFB48B]" : "hover:bg-[#FFB48B]"} flex  items-center gap-3 sm:gap-3 hover:scale-105 transition-all md:gap-5 my-3 pl-2 sm:pl-5 py-2 text-sm sm:text-md md:text-lg  w-full rounded-l-full 
      `}>
                       <p>
                        <Image src={"/icons/"+icon} alt='profile_icon' height={17} width={17}/>
                        
                        </p>  <label className='font-bold text-sm text-[#0E172C]  cursor-pointer'>{title}</label>
                    </li>
       </Link>  
    </>
  );
}
export default Item;
