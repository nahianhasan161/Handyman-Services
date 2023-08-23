import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import * as React from 'react';

export interface IVerificationProps {
}

export default function Verification (props: IVerificationProps) {
  return (
    <section>
       <HeadingH2Part
        title1='Job posting monitoring for admins:'
        title2=' Customer projects at a glance'
        className='text-center'
         
        />
        <div
        className='mx-10'
        >

        <SearchBar/>
        </div>
    </section>
  );
}
