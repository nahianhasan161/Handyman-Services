import React from 'react';


type ActionButtonProps = {
    title:string,
    type?:string,
    
    className?:string,
    
};

const ActionButton:React.FC<ActionButtonProps> = ({title,type,className}) => {
    
    
    return (<>
                <button className={`${className} whitespace-nowrap bg-orange_500 font-bold rounded-xl text-sm md:text-base py-2 px-5 md:py-3 md:px-8 text-white`}>{title}</button>
        </>
        
    );
}
export default ActionButton;