import React from 'react';
import Link from 'next/link';
type NavTitleProps = {
    
};

const NavTitle:React.FC<NavTitleProps> = () => {
    
    return <><Link href={"/admin"}> <li className='font-bold cursor-pointer text-xs sm:text-md md:text-lg'>
    Dashboard
</li>
</Link></>
}
export default NavTitle;