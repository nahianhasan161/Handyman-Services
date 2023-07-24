import React from 'react';

type MessageItemProps = {
    name:string,
    time:string,
    description:string,
};

const MessageItem:React.FC<MessageItemProps> = ({name,time,description}) => {
    
    return (
        <div>
        <div className='my-3 flex items-center justify-between max-w-[15rem]'>
            <h1 className='font-bold'>{name}</h1>
            {/* TODO: sudo circle before time */}
            <span className='text-xs text-offwhite_400'>{time}</span>
        </div>
        <p className='text-xs text-offwhite_50'> {description}</p>
</div>
)
}
export default MessageItem;