import React from 'react';


type InputFormProps = {
    title?:string,
    type:string,
    placeholder?:string,
    className?:string,
    name?:string,
};

const InputForm:React.FC<InputFormProps> = ({title,type,placeholder,className,name}) => {
    
    
    return (<div className='bg-white p-3'>

        <div>
            {title && (<label htmlFor={name} className='Whitespace-nowrap block py-3 fond-xs sm:font-sm md:font-medium'>{title}</label>)}
            <input type={type} name={name} placeholder={placeholder}
            className={`${className} p-3 font-medium text-xs sm:text-base text-offwhite-400 input-border rounded-[8px] w-full`}
            />
        </div>
        
    </div>);
}
export default InputForm;