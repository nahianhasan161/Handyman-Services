import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type ProfileImageProps = {
   
    image:string,
    className?:string,
    
};

const ProfileImage:React.FC<ProfileImageProps> = ({image,className}) => {
    
    return (<>
        <Image
          src={image}
          alt="avatar"
          className={`${className} rounded-full max-w-[15px] sm:max-w-[100px] min-w-[20px] 
          box-shadow-top border-6 border-white `}
         width={100}
         height={100}
         
          
          />
          </>
    );
}
export default ProfileImage;