import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import React from 'react';

type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
   
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
            <div>
        <Typography 
        Type={HeadingType.h1}
        Description='Un Accepted Offers'
        className='font-bold'
        />
        </div>
        {/* Content Part */}
            <div className='flex items-center gap-3 w-full'>
             Review 
            </div>
        </div>
        
    
  );
}
export default Page;
