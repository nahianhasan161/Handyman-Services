import Image from 'next/image';
import * as React from 'react';
import ActionButton from '../Admin/Button/ActionButton';

export interface IReviewCardProps {
}

export default function ReviewCard (props: IReviewCardProps) {
  return (
    <div className='rounded-xl bg-white shadow-c_sm flex text-offwhite-400
    px-5 py-4 my-6 min-h-[140px]
    '>
      <div className='w-2/3'>
        <h5 className='text-sm font-bold'>Review</h5>
        <p className='mt-4 text-xs'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
        the industrys standard dummy text.
        </p>
      </div>
      <div className='w-1/3 flex flex-col items-end justify-between '>
        <div className='flex items-center gap-4'>
           <span className='cursor-pointer'>

            <Image
            src="/icons/dot_menu_icon.svg"
            alt='dot_menu_icon'
            height={24}
            width={24}
            />
            </span>
            <span className='cursor-pointer'>

            <Image
            src="/icons/edit-icon.svg"
            alt='dot_menu_icon'
            height={24}
            width={24}
            />
            </span>
        </div>
        <div>
            <ActionButton
            className='font-medium'
            title='Submit'
            />
        </div>
      </div>
    </div>
  );
}
