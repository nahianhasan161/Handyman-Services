import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from './ProfileImage';


type ProfileProps = {
    title:string,
    subtitle:string,
    image:string,
    link:string,
    textClassName?:string
};

const Profile:React.FC<ProfileProps> = ({title,subtitle,image,link,textClassName}) => {
    
    return (
        <div className=" group  flex items-center sm:gap-3  gap-1">
        
        <Link href={link} className=''>
        <ProfileImage image={image}/>
         </Link>
        <div className={`${textClassName} sm:block `}>
            <Link href={link} className='cursor-pointer '>
            <h1 className='font-bold  text-[10px] xs:text-lg sm:text-xl md:text-2xl '>
                {title}
            </h1>
            </Link>
            <Link href={"/profile"} className='cursor-pointer'>
            <p className='whitespace-nowrap text-[10px] sm:text-xs md:text-base '>
            
            {subtitle}
            </p>
            </Link>
        </div>
</div>
    );
}
export default Profile;