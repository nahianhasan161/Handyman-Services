import StatusSpan from '@/components/Utilities/StatusSpan';
import React from 'react';

type DeleteTableItemProps = {
    title:string,
    date:string,
    time:string,
};

const DeleteTableItem:React.FC<DeleteTableItemProps> = ({title,date,time}) => {
    
    return (
        <div className='grid grid-cols-12 text-xs my-3'>
        <div className='col-span-3 md:col-span-4 gap-5 '>
              <h1 className='flex gap-3 font-medium max-w-[14rem]'>{title}</h1>
              </div>
              <div className='grid-span-4 flex gap-8 pr-10 whitespace-nowrap '>
                <p >Posted on</p>
                <p className='text-offwhite-100'><StatusSpan title={date} /></p>
                <p className='text-offwhite-100'><StatusSpan title={time} /></p>
              </div>
              <p className="font-bold col-span-1 col-start-12 lg:col-start-11
                "
               >
                
                <StatusSpan title="Deleted" />
                
                </p>
        </div>
    )
}
export default DeleteTableItem;