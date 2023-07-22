import React from 'react';

type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
   
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>All New Profile Section</h1>
        </div>
        {/* Content Part */}
            <div className='flex items-center gap-3 w-full'>
             All New Profile 
            </div>
        </div>
        
    
  );
}
export default Page;
