import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import MessageCollapseable from '@/components/Collapseable/MessageCollapseable';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import * as React from 'react';

export interface IMessageProps {
}

export default function Message (props: IMessageProps) {
  return (
    <div className='min-h-screen'>
      <HeadingH2Part
        title1='User management hub:'
        title2='Admin’s control centre'
        className='text-center'
         
        />
        <div
        className='mx-10'
        >

        <SearchBar/>
        </div>
        <div className='mt-3 space-y-6'>
          <MessageCollapseable/>
          <MessageCollapseable/>
          <MessageCollapseable/>
        </div>
    </div>
  );
}
