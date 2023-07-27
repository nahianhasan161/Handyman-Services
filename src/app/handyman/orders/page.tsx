import React from 'react';
import OrderItem from '@/components/Handyman/Order/OrderItem';
import Image from 'next/image';
import OrderCardSection from '@/components/Handyman/Order/OrderCardSection';
type PageProps = {
    
    
};

const Page:React.FC<PageProps> = () => {
    

  return  (
    <main className=' flex flex-col  '>
         
    <section className=''>
    <OrderCardSection/>
   </section>
   </main>
    
  );
}
export default Page;
