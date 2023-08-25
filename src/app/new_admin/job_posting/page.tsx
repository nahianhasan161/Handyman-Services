
import StatusButton from '@/components/Admin/Button/StatusButton';
import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import StatusCard from '@/components/Card/StatusCard';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import * as React from 'react';

export interface IJobPostingProps {
}

export default function JobPosting (props: IJobPostingProps) {
  return (
    <section className='min-h-screen'>
    <div>
       <HeadingH2Part
        title1='Job posting monitoring for admins:'
        title2='Customer projects at a glance'
        className='text-center'
         
        />
        <div
        className='mx-10'
        >

        <SearchBar/>
        </div>
        <div className='my-[35px] flex gap-5 justify-end'>
        <StatusButton
        title='Open'
        status='success'
        />
        <StatusButton
        title='Completed'
        status='complete'
        />
        <StatusButton
        title='Deleted'
        status='delete'
        />
        <StatusButton
        title='Accepted'
        status='accept'
        />
        </div>

        <div>
          <p className='text-end text-orange_500 underline 
          sm:text-base text-sm font-medium mb-4 cursor-pointer'>
            See All
          </p>

          <div>
            <StatusCard/>
            <StatusCard/>
            <StatusCard/>
          </div>
        </div>
    </div>
    </section>
  );
}
