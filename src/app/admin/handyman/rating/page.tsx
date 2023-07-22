import React from 'react';

type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
   
  return  (
    <div className=' h-screen flex flex-col m-10 '>

            {/* Heading Part */}
            <div>
         <h1 className='text-xl md:text-2xl font-bold py-3'>Rating Section</h1>
        </div>
        {/* Content Part */}
            <div className='flex items-center gap-3 w-full'>
             Rating 
            </div>
        </div>
        
    
  );
}
export default Page;
