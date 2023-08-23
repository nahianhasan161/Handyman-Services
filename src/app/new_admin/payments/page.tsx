import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import * as React from 'react';

export interface IPaymentsProps {
}

export default function Payments (props: IPaymentsProps) {
  return (
    <section>
    <div>
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
    </div>
    </section>
  );
}
