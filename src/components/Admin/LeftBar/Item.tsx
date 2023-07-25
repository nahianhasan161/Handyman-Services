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
      className={`${active ? "bg-[#FFB48B]" : " "} flex  items-center  gap-1 sm:gap-3  transition-all md:gap-5 my-3 pl-1 sm:pl-2 md:pl-5 py-2 text-sm sm:text-md md:text-lg pr-1 w-full rounded-l-full 
      `}>
                       <p>
                        <Image src={"/icons/"+icon} alt='profile_icon' height={17} width={17} className='min-w-[15px]'/>
                        
                        </p>  <label className='font-bold  sm:text-sm text-[#0E172C]  cursor-pointer text-[10px]'>{title}</label> 
                    </li>
       </Link>  
    </>
  );
}
export default Item;
