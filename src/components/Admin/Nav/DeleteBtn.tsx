import React from 'react';

type DeleteBtnProps = {
    className?:string,
    title:string
};

const DeleteBtn:React.FC<DeleteBtnProps> = ({className,title}) => {
    
    return <>
    <button className={`${className} sm:whitespace-nowrap bg-orange_500 font-bold rounded-xl text-xs md:text-base py-1 px-2 sm:py-2 sm:px-5 md:py-3 md:px-8 text-white`}>
        {title}
        </button>
</>
}
export default DeleteBtn;