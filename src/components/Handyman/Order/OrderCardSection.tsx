import React from 'react';
import Image from 'next/image';
import OrderItem from "@/components/Handyman/Order/OrderItem" 
type OrderCardSectionProps = {
    
};

const OrderCardSection:React.FC<OrderCardSectionProps> = () => {
    
    return (
        <div className=' grid grid-cols-12 bg-white box-shadow-bottom p-2 sm:p-5 sm:m-5 '>
       
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
    );
}
export default OrderCardSection;