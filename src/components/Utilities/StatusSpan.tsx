import React from 'react';

type StatusSpanProps = {
    title:string,
    className?:string,
};

const StatusSpan:React.FC<StatusSpanProps> = ({title,className}) => {
    
    return (<>
    <span className={`${className} relative ml-1 before:content-[''] before:top-[4px] before:left-[-15px] before:bg-slate-300 before:h-2 before:w-2 before:rounded-full before:absolute :before-rounded-full`}>{title}</span>
    </>)
}
export default StatusSpan;