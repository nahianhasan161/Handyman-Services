import TableData from '@/Contents/TableData/TableData';
import SearchBar from '@/components/Admin/SearchBar/SearchBar';
import Table from '@/components/Admin/Table/Table';
import HeadingH2Part from '@/components/Utilities/Typography/HeadingH2Part';
import Image from 'next/image';
import * as React from 'react';

export interface IUserManagmentProps {
}

export default function UserManagment (props: IUserManagmentProps) {
    const titles = ['Address','Phone Number','Email Address','Address','Phone Number','Email Address','Address','Phone Number','Email Address',]
    const informations = [['Awsome Street Mr. Bones','01987462342','awsome@gmail.com'],['The Sliding Mr. Bones','01987462342','shaoyo@gmail.com'],["The Sliding Mr. Bones","0183847593",'shiningstar@gmail.com']] 
    const loginTitle = TableData.LoginDetails.map(item=>item.title)
    
    const maxLength = Math.max(...TableData.LoginDetails.map(item => item.data.length));

        const loginDetails = Array.from({ length: maxLength }, (_, i) =>
        TableData.LoginDetails.map(item => item.data[i])
        );
    return (
    
    <section>
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
        <div className='my-[35px]'>
        <Table
        titles={loginTitle}
        informations={loginDetails}
        thClassName='sm:text-[10px]'
        trClassName='text-[10px]'
        />
        </div>
     <div>
     <HeadingH2Part
        title1='Login'
        title2='Details'
        varient='secondary'
        className='mb-[35px]'
         
        />
        <div className='grid grid-cols-12 gap-[81px]'>
        <span className='col-span-6'>

        <Table
        titles={loginTitle}
        informations={loginDetails}
        thClassName='sm:text-xs'
        />
        </span>
        <div className='col-span-6 flex flex-col gap-[35px]'>
        <Image
        src="/images/downtrend.png"
        alt="trend"
        width={317}
        height={185}
        />
        <Image
        src="/images/wave.png"
        alt="trend"
        width={315}
        height={181}
        />
        </div>
        </div>
     </div>
    </section>
  );
}
