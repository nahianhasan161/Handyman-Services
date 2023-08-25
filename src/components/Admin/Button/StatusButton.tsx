import cn from '@/utills/utills';
import React from 'react';


type StatusButtonProps = {
    title:string,
    type?:string,
    varient?:string,
    status?:"success"|"complete"|"delete"|"accept"
    className?:string,
    
};

const StatusButton:React.FC<StatusButtonProps> = ({title,type,className,...props}) => {
    
    
    return (<>
                <button className={cn(
                "whitespace-nowrap bg-green_500 shadow-c_sm font-medium rounded-lg text-xs  sm:text-base py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:px-10 text-white" ,
                {
                    "bg-green_500":(props.status ==="success")
                },
                {
                    "bg-orange_300":(props.status ==="complete")
                },
                {
                    "bg-red_500":(props.status ==="delete")
                },
                {
                    "bg-yallow_200":(props.status ==="accept")
                },
                `${className}`
                )}>{title}</button>
        </>
        
    );
}
export default StatusButton;