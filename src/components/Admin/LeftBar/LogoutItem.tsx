import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type LogoutItemProps = {
    
};

const LogoutItem:React.FC<LogoutItemProps> = () => {
    
    return (<>
     <Link className="cursor-pointer flex items-center gap-2 sm:gap-5 pl-3 sm:pl-5 md:pl-10 lg:pl-[5rem] my-3" href={"/logout"}>
                  <span>

                  <Image src="/icons/close-exit-logout-power-icon-1.png" alt="logout_icon" height={15} width={15}
                  className='rounded-full outline outline-4 outline-[#E0DBDB] min-w-[15px]'
                  />
                  </span>
                  <h1 className=' text-md pr-1 md:text-xl sm:text-lg  font-bold  text-[#0E172C]'>
                  Logout</h1></Link> 
    </>)
}
export default LogoutItem;