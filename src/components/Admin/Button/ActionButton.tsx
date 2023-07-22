import React from 'react';


type ActionButtonProps = {
    title:string,
    type?:string,
    
    className?:string,
    
};

const ActionButton:React.FC<ActionButtonProps> = ({title,type,className}) => {
    
    
    return (<>
                <button className={`${className} bg-orange_500 font-bold rounded-xl py-3 px-8 text-white`}>{title}</button>
        </>
        
    );
}
export default ActionButton;