import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type ProfileProps = {
    
};

const Profile:React.FC<ProfileProps> = () => {
    
    return (
        <div className=" group  flex items-center gap-3 ">
        
        <Link href={"/admin"} >
        <Image
          src={"/images/avatar1.png"}
          alt="avatar"
          className="rounded-full box-shadow-top border-6 border-white"
         width={100}
         height={100}
         
          
          />
          </Link>
         
        <div >
            <Link href={"/admin"} className='cursor-pointer '>
            <h1 className='font-bold text-lg sm:text-xl md:text-2xl '>
                Admin
            </h1>
            </Link>
            <Link href={"/profile"} className='cursor-pointer'>
            <p className='whitespace-nowrap text-xs md:text-base '>
            
            Jhon Doe
            </p>
            </Link>
        </div>
</div>
    );
}
export default Profile;