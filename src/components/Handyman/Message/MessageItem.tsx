import StatusSpan from '@/components/Utilities/StatusSpan';
import React from 'react';

type MessageItemProps = {
    name:string,
    time:string,
    description:string,
};

const MessageItem:React.FC<MessageItemProps> = ({name,time,description}) => {
    
    return (
        <div>
        <div className='my-3 flex items-center justify-between '>
            <h1 className='font-bold'>{name}</h1>
           
            <span className='text-xs text-offwhite_400'> 
            <StatusSpan title={time} className='ml-1'/>
            </span>
        </div>
        <p className='text-xs text-offwhite_50 ml-1'> {description}</p>
</div>
)
}
export default MessageItem;