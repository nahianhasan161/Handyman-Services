import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import * as React from 'react';

export interface IStatisticsProps {
}

export default function Statistics (props: IStatisticsProps) {
  return (
    <section>
    <div>
       <HeadingH2Part
        title1='Data insights:'
        title2=' Explore statistics and analytics'
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
