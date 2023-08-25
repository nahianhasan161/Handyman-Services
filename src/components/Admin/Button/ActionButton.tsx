import cn from '@/utills/utills';
import React from 'react';


type ActionButtonProps = {
    title:string,
    type?:"send"|"view"|"accept"|"decline",
    varient?:"default"|"primary",
    className?:string,
    
};

const ActionButton:React.FC<ActionButtonProps> = ({title,className,...props}) => {
    
    
    return (<>
                <button className={cn(
                    ` whitespace-nowrap bg-orange_500 font-bold rounded-xl text-xs  sm:text-base py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-8 text-white`,
                    (props.varient === "primary") && 
                    {"text-[10px] sm:text-xs font-medium py-1 md:py-2 px-1.5 sm:px-3 md:px-3 bg-orange_500 rounded-lg" : props.type === "send"},
                    (props.varient === "primary") && 
                    {"text-[10px] sm:text-xs font-medium py-1 md:py-2 px-1.5 sm:px-3 md:px-3 bg-yellow_300 rounded-lg" : props.type === "view"},
                    (props.varient === "primary") && 
                    {"text-[10px] sm:text-xs font-medium py-1 md:py-2 px-1.5 sm:px-3 md:px-3 bg-green_500 rounded-lg" : props.type === "accept"},
                    (props.varient === "primary") && 
                    {"text-[10px] sm:text-xs font-medium py-1 md:py-2 px-1.5 sm:px-3 md:px-3 bg-red_500 rounded-lg" : props.type === "decline"}
                    ,
                `${className}`
                )}>{title}</button>
        </>
        
    );
}
export default ActionButton;