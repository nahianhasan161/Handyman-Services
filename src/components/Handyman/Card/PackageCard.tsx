import React from 'react';

type PackageCardProps = {
    title:string,
    amount:string,
    className?:string,
};

const PackageCard:React.FC<PackageCardProps> = ({title,amount,className}) => {
    
    return (
        <div className={`${className} bg-white flex flex-col items-center justify-between shadow-xl p-5 max-w-[17rem] min-w-[10rem]  space-y-8`}>

                   <div className='space-y-4 text-center'>
                    <h1 className='font-bold text-xl max-w-[7rem]'>{title}</h1>
                    <p className='font-medium text-4xl'>{amount}</p>
                   </div>

                    <button className='py-2 px-8 border-2 rounded-xl font-medium'>Payment</button>
            </div>
    );
}
export default PackageCard;