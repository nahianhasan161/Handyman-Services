import React from 'react';


type ButtonProps = {
    title:string,
    type?:string,
    
    className?:string,
    
};

const Button:React.FC<ButtonProps> = ({title,type,className}) => {
    
    
    return (<>
                <button className={`${className} `}>{title}</button>
        </>
        
    );
}
export default Button;