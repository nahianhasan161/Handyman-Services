
import SearchBar from '@/components/Admin/SearchBar/SearchBar';
/* import PiChart from '@/components/Charts/PiChart'; */
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import dynamic from 'next/dynamic';
import * as React from 'react';

const PiChart = dynamic(() => import('@/components/Charts/PiChart'), { ssr: false });
const BarChartStatistics = dynamic(() => import('@/components/Charts/BarChartStatistics'), { ssr: false });
export interface IStatisticsProps {
}

export default function Statistics (props: IStatisticsProps) {
  return (
    <section className='text-offwhite-400 w-max bg-[#F2F8FF] min-h-screen'>
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
        <div>
          <h4 className='text-2xl font-bold'>
            Growth graph
            <div className='w-max relative overflow-auto my-10 bg-white shadow-c_sm p-10'>
              <BarChartStatistics/>

              <h4 className='text-center absolute left-[-1px] top-[50%] -translate-y-1/2 -rotate-90 font-bold text-orange_500'>Traffic</h4>
              <h4 className='text-center font-bold text-orange_500'>Growth of last 7 Years</h4>
            </div>
          </h4>
        </div>
        <div>
        <h4 className='text-2xl font-bold mx-auto'>
            Pi chart graph
          </h4>

          <div className=' '>
            
         <PiChart/>




          </div>
          <div className=' bg-white shadow-c_sm p-4 w-40'>
              <div className='flex gap-3 items-center'>

              <span className='bg-orange_500 h-4 w-4'>

              </span>
              <span>

              Organic search
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-red_400 h-4 w-4'>

              </span>
              <span>

              Direct
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-black-500 h-4 w-4'>

              </span>
              <span>

              Other
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-orange_300 h-4 w-4'>

              </span>
              <span>

              Referral
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-green_400 h-4 w-4'>

              </span>
              <span>

              Email
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-green_500 h-4 w-4'>

              </span>
              <span>

              Social
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-offwhite-200 h-4 w-4'>

              </span>
              <span>

              Paid search
              </span>
              </div>
              <div className='flex gap-3 items-center'>

              <span className='bg-mud_500 h-4 w-4'>

              </span>
              <span>

              Display
              </span>
              </div>
          </div>
        </div>
    </div>
    </section>
  );
}
