import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from './ProfileImage';


type ProfileProps = {
    title:string,
    subtitle:string,
    image:string,
    link:string,
};

const Profile:React.FC<ProfileProps> = ({title,subtitle,image,link}) => {
    
    return (
        <div className=" group  flex items-center gap-3 ">
        
        <Link href={link} >
        <ProfileImage image={image}/>
         </Link>
        <div >
            <Link href={link} className='cursor-pointer '>
            <h1 className='font-bold text-lg sm:text-xl md:text-2xl '>
                {title}
            </h1>
            </Link>
            <Link href={"/profile"} className='cursor-pointer'>
            <p className='whitespace-nowrap text-xs md:text-base '>
            
            {subtitle}
            </p>
            </Link>
        </div>
</div>
    );
}
export default Profile;