import React from 'react';

type OrderItemProps = {
    title:string,
    time:string,
    date:string,
    amount:string,
    description:string,
};

const OrderItem:React.FC<OrderItemProps> = ({title,time,date,description,amount}) => {
    
     return (
        
        <div className='my-1  space-y-2 '>
            <h1 className='font-medium'>{title}</h1>
           
            
       
        <p className='text-xs text-offwhite_50'> {description}</p>
        <p className='font-medium'>{amount}</p>
        <div className='text-xs flex items-center gap-5 sm:gap-8'>
            <span>Posted on</span> 
            <span className='text-offwhite_50'>{date}</span>
            <span className='text-offwhite_50'>{time}</span>
        </div>
</div>
)
}
export default OrderItem;