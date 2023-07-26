import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type LogoutItemProps = {
    textClassName?:string
};

const LogoutItem:React.FC<LogoutItemProps> = ({textClassName}) => {
    
    return (<>
     <Link className="cursor-pointer flex items-center gap-2 sm:gap-5 pl-1 sm:pl-5 md:pl-10 lg:pl-[5rem]  lg:pb-10 md:pb-5 sm:pb-3 pb-1" href={"/logout"}>
                  <span>

                  <Image src="/icons/close-exit-logout-power-icon-1.png" alt="logout_icon" height={15} width={15}
                  className='rounded-full outline outline-4 outline-[#E0DBDB] min-w-[15px]'
                  />
                  </span>
                  <h1 className={`${textClassName} sm:block  pr-1 text-xs  sm:text-base md:text-lg lg:text-xl  font-bold  text-[#0E172C]`}>
                  Logout</h1></Link> 
    </>)
}
export default LogoutItem;