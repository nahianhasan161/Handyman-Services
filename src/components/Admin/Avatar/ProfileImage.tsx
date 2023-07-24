import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type ProfileImageProps = {
   
    image:string,
    
};

const ProfileImage:React.FC<ProfileImageProps> = ({image}) => {
    
    return (<>
        <Image
          src={image}
          alt="avatar"
          className="rounded-full box-shadow-top border-6 border-white"
         width={100}
         height={100}
         
          
          />
          </>
    );
}
export default ProfileImage;