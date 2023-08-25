import TableData from '@/Contents/TableData/TableData';
import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import Table from '@/components/Admin/Table/Table';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import * as React from 'react';

export interface IPaymentsProps {
}
const paymentDetailsLength = Math.max(...TableData.PaymentDetails.map(item => item.data.length));
    const paymentTitles = TableData.PaymentDetails.map(item=>item.title)
    const paymentDetails  = Array.from({ length: paymentDetailsLength }, (_, i) =>
        TableData.PaymentDetails.map(item => item.data[i])
        );
export default function Payments (props: IPaymentsProps) {
  return (
    <section className='min-h-screen'>
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

        <div className='mt-10'>
        <Table
        titles={paymentTitles}
        informations={paymentDetails}
        dataType={[,,,,,"button"]}
        isButtonTitle={true}
        varient='secondary'
        
        />
        </div>
    </div>
    </section>
  );
}
