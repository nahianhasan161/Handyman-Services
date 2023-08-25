"use client"
import Image from 'next/image';
import * as React from 'react';

export interface IMessageCollapseableProps {
}

export default function MessageCollapseable (props: IMessageCollapseableProps) {
    const [open,setOpen] = React.useState(false)
  return (
    <div className='rounded-xl bg-white shadow-c_sm px-3 sm:px-5 md:px-7 lg:px-9 py-4
    text-offwhite-400
    '>
      <div className={`flex  justify-between ${open ? "items-start":"items-center"}`}>
        <div className='text-xs font-medium'>
        <h4 className='text-orange_500 text-xl font-bold'>Jhon</h4>
        
        {open && <div>
        <div className='flex justify-between items-start'>
        <small className='mt-2 mb-3 '>23 June,2023</small>

        <span className='flex gap-1'>
            <Image
            src="/icons/messageIcon.svg"
            className='cursor-pointer'
            alt='message_icon'
            height={20}
            width={20}
            />
            <Image
            src="/icons/delete-icon-fill.svg"
            className='cursor-pointer'
            alt='delete_icon'
            height={20}
            width={20}
            />
        </span>
        </div>
        <div>
        <div className='flex justify-between items-end'>
        <p className='w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
it to make a type specimen book.</p>
        <small className='text-offwhite-500/50 font-medium'>5 hours ago</small>
        </div>
        <div className=' mt-9 mb-12'>
            <p className='float-right w-3/4 bg-orange_600/30 pl-6 pr-5 pb-6 pt-5 rounded-tl-3xl rounded-br-3xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen book.
            </p>
        </div>
        </div>
        <div className='relative'>

        <input 
        type="text"
        placeholder='type text here'
        className='rounded-lg w-full
         bg-offwhite-150 h-11 mt-[50px]
         
         px-6'
        />
        <Image 
        className='absolute right-3 bottom-3'
        src="/icons/send-icon.svg"
        alt='send_button'
        height={24}
        width={24}
        />
        </div>
        </div>}
        </div>
        {!open && <p className=' line-clamp-2 text-xs font-medium'>
            Lorem Ipsum is simply dummy text...
            </p>}
       {!open && <small className=' text-xs font-medium text-offwhite-400/50'>5 hours ago</small>}

        <span className='cursor-pointer p-1'
        onClick={()=>{setOpen(!open)}}
        >

        {!open && <Image
        className=' w-6 md:w-8 lg:w-10'
        src="/icons/downarrow.svg"
        alt='arrow_down_icon'
        height={35}
        width={30}
        />}
       {open && <Image
        className='w-6 md:w-8 '
        src="/icons/arrow_up.png"
        alt='arrow_up_icon'
        height={35}
        width={30}
        />}
        </span>
      </div>
    </div>
  );
}
