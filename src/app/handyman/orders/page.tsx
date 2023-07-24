import React from 'react';
import OrderItem from '@/components/Handyman/Order/OrderItem';
import Image from 'next/image';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    

  return  (
    <main className=' h-screen flex flex-col m-10 '>
         
    <section className='p-5 bg-white'>
     <div className=' grid grid-cols-12 min-w-[20rem]'>
       
       <div className=' col-span-10 '>
         <OrderItem 
         title='Laying tiles: 25m2; Floor in bathroom, kitchen, hall, 25km, Berlin'
         amount="$250"
          time="9:45am"
          date="2/2/2023" 
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
         the industry&apos;s standard dummy text'
         />
       
         
       </div>

       <div className='flex flex-col justify-center col-start-12 col-span-1 '>
       <Image src={"/icons/uparrow.svg"} className='cursor-pointer' alt='up_icon' width={30} height={30}/>
       <Image src={"/icons/downarrow.svg"} className='cursor-pointer' alt='up_icon' width={30} height={30}/>
       </div>
     </div>
   </section>
   </main>
    
  );
}
export default Page;
