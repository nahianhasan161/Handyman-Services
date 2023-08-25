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
    
    const loginTitles = TableData.LoginDetails.map(item=>item.title)
    const LoginDetailsLength = Math.max(...TableData.LoginDetails.map(item => item.data.length));
    const loginDetails = Array.from({ length: LoginDetailsLength }, (_, i) =>
    TableData.LoginDetails.map(item => item.data[i])
    );
    
    const userDetailsLength = Math.max(...TableData.UserDetails.map(item => item.data.length));
    const userTitles = TableData.UserDetails.map(item=>item.title)
    const userDetails = Array.from({ length: userDetailsLength }, (_, i) =>
        TableData.UserDetails.map(item => item.data[i])
        );
    return (
    
    <section className='min-h-screen'>
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
        titles={userTitles}
        informations={userDetails}
        thClassName=''
        trClassName='text-[10px]'
        varient='primary'
        dataType={["image",,,,,,"boolean","boolean","boolean" ]  }
        />
        </div>
     <div>
     <HeadingH2Part
        title1='Login'
        title2='Details'
        varient='primary'
        className='mb-[35px]'
         
        />
        <div className='flex flex-col md:flex-row  gap-10 lg:gap-[81px]'>
        <span className='md:w-[445px]'>

        <Table
        titles={loginTitles}
        informations={loginDetails}
        thClassName='sm:text-xs'
        varient='primary'
        
        />
        </span>
        <div className='col-span-6 flex flex-col gap-[35px] justify-center items-center md:items-start '>
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
