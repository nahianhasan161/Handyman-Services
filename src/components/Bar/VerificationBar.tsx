import * as React from 'react';
import ActionButton from '../Admin/Button/ActionButton';
import ProfileImage from '../Admin/Avatar/ProfileImage';

export interface IVerificationBarProps {
}

export default function VerificationBar (props: IVerificationBarProps) {
  return (
    <div 
    className='flex justify-between items-center bg-white rounded-xl shadow-c_sm
    px-3 lg:px-[25px] py-2 my-4 text-offwhite-400
    '>
      <div className='flex gap-1 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-[25px] items-center '>
        <ProfileImage
        image='/images/avatar1.png'
        className='sm:w-[42px] sm:h-[42px] '
        />
        <h4 className='text-base sm:text-lg md:text-xl font-bold text-orange_500'>
          Bruno
        </h4>
      </div>
      <div className='flex flex-col items-end sm:flex-row sm:items-center gap-1 lg:gap-[55px]'>

      <div className='flex  gap-1  lg:gap-4'>
        <ActionButton
        varient='primary'
        title='Send msg'
        type='send'
        
        />
        <ActionButton
        varient='primary'
        title='View'
        type='view'
        />
        <ActionButton
        varient='primary'
        title='Accept'
        type='accept'
        />
        <ActionButton
        varient='primary'
        title='Decline'
        type='decline'
        />
      </div>
      <p className='xl:text-base lg:text-sm  text-[10px]'>5 hours age</p>
      </div>
    </div>
  );
}
