import React from 'react';


type InputBorderedProps = {
    
    type:string,
    placeholder?:string,
    className?:string,
    name?:string,
};

const InputBordered:React.FC<InputBorderedProps> = ({type,placeholder,className,name}) => {
    
    
    return (<>

        
            
            <input type={type} name={name} placeholder={placeholder}
            className={`${className}  text-sm sm:text-base border p-2 sm:p-3 text-offwhite-400 font-medium   placeholder-offwhite-400`}
            />
        
        
    </>);
}
export default InputBordered;