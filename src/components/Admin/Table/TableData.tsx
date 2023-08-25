import Image from 'next/image';
import React from 'react';
import ProfileImage from '../Avatar/ProfileImage';
import Link from 'next/link';


type TableDataProps = {
    title:string|number|boolean,
    key?:string|number,
    type?:string,
};

const TableData:React.FC<TableDataProps> = ({title,key,...props}) => {
    
    return (<>
    {
    props.type?
    
    (
    (props.type=== "image" && 
    <ImageData
    title={title}
    key={key}
    /> ) ||
    (props.type=== "boolean" && 
    <BooleanData
    title={title}
    key={key}
    />
   
    )
     ||
    (props.type=== "button" && 
    <ViewData
    title={title}
    key={key}
    />
   
    )

    )
    
    

:
        /* Default */
    <StringData
    title={title}
    key={key}
    
    />
}
    </>)
}
/* String */
const StringData:React.FC<TableDataProps> = ({title,key}) => {
    
    return (<>
    
    <td className='p-1 sm:p-3 md::p-5 max-w-[12rem] '
    key={key}
    >
        <span> {title}</span>
        </td>
    </>)
}
/* Image */
const ImageData:React.FC<TableDataProps> = ({title,key}) => {
    
    return (<>
    
    <td className='p-1 sm:p-3 md::p-5 max-w-[12rem] '
    key={key}
    >
        <span>
        <ProfileImage 
        image={title as string}
        className='h-[35px] w-[35px]'
        />
        </span>
        </td>
    </>)
}
/* Boolean */
const BooleanData:React.FC<TableDataProps> = ({title,key}) => {
    
    return (<>
    
    <td className='p-1 sm:p-3 md::p-5  max-w-[12rem] '
    key={key}
    >
        <span className='flex justify-center items-center'> {title?
        <Image
        src="/icons/success_tic.png"
        alt='success_icon'
        width={15}
        height={15}
        
        />
        :
        <Image
        src="/icons/failed_cross.png"
        alt='success_icon'
        width={15}
        height={15}
        
        />
       
        
        }</span>
        </td>
    </>)
}
/* View Button*/
const ViewData:React.FC<TableDataProps> = ({title,key}) => {
    
    return (<>
    
    <td className='p-1 sm:p-3 md::p-5  max-w-[12rem] '
    key={key}
    >
        <Link href={title as string} 
        className='flex justify-center font-medium
         text-orange_500 items-center gap-1 cursor-pointer'> 
        view
        <Image
        src="/icons/view-icon-eye.svg"
        alt='success_icon'
        width={15}
        height={15}
        
        />
        
       
        
        </Link>
        </td>
    </>)
}
export default TableData;