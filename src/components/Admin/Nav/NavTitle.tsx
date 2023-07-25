import React from 'react';
import Link from 'next/link';
type NavTitleProps = {
    title:string,
    link:string,
};

const NavTitle:React.FC<NavTitleProps> = ({title,link}) => {
    
    return <><Link href={link}> <li className='font-bold cursor-pointer text-xs sm:text-md md:text-lg'>
    {title}
</li>
</Link></>
}
export default NavTitle;