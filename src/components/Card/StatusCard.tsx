import * as React from 'react';
import StatusButton from '../Admin/Button/StatusButton';
import Image from 'next/image';

export interface IStatusCardProps {
}

export default function StatusCard (props: IStatusCardProps) {
  return (
    <div className='lg:px-[30px] my-[25px]  px-3 sm:px-4 lg:py-5 md:py-4 py-3 flex  gap-7  
    bg-white border shadow-c_md'>
      <div className='w-2/3 text-offwhite-400'>
        <h5 className='text-orange_500 font-bold'>Demolition and Disposal</h5>
        <h5 className='text-medium sm:text-base text-sm 
        '>
            Complete demolition of buildings and strucutres
            </h5>
            <div className='text-xs flex items-center  gap-[40px]'>
            <p className='flex flex-col font-medium'>
                

                <span>
                Sq:    
                </span>               
                <span>
                Rooms:    
                </span>               
                <span>
                Floors:    
                </span> 
                
                              
            </p>

            <p className='flex flex-col'>
                <span >
                    5 feet
                </span>
                <span>
                    5
                </span>
                <span>
                    3
                </span>
            </p>
            </div>
            <h5 className='my-3 font-bold  sm:text-base text-sm'>
                Description
                </h5>
                <p className='text-xs'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry standard dummy text.
                </p>
      </div>
      <div className='w-1/3 flex flex-col justify-between'>
        <div className='flex gap-1 lg:gap-[10px] justify-end lg:flex-row flex-col-reverse items-end lg:items-center'>
            <Image src="/icons/dot_menu_icon.svg"
            alt='menu_icon'
            width={24}
            height={24}
            />
            <Image src="/icons/book_icon.svg"
            alt='book_icon'
            width={24}
            height={24}
            />
            <Image src="/icons/edit-icon.svg"
            alt='edit_icon'
            width={24}
            height={24}
            />
            <span className='ml-[10px]'>
            <StatusButton
            title='Accepted'
            status='accept'
            />
            </span>
        </div>

        <strong className='text-end font-bold text-xl'>
            $250
        </strong>
      </div>
    </div>
  );
}
