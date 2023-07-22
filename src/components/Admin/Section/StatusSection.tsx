import React from 'react';
import ActionButton from "@/components/Admin/Button/ActionButton"


type StatusSectionProps = {
    title:string,
    description:string,
    btnTitle:string,
    
};

const StatusSection:React.FC<StatusSectionProps> = ({title,description,btnTitle}) => {
    
    
    return (<div className='flex flex-col gap-3 p-3 w-[15rem] '>
        <h1 className='font-bold text-2xl text-offwhite-50'>{title}</h1>
        <p className='text-xs text-offwhite-50'>{description}</p>
       <ActionButton title={btnTitle}/>
    </div>);
}
export default StatusSection;