import Image from 'next/image';
import React from 'react';
import {BsSearch} from "react-icons/bs"
type SearchBarProps = {
    
};

const SearchBar:React.FC<SearchBarProps> = () => {
    
    return (<div>
       

        <form className='flex  items-center md:gap-3 bg-white m-1 md:p-1 md:m-3 rounded-[16px]  shadow-bottom'>
            <div  className='flex items-center  xs:gap-3 border-r-2  md:p-2 w-full'>
                <label htmlFor='search '>
                    <Image src={"/icons/search.png"} alt='search_icon' height={16} width={16}></Image>
                </label>
                <input id="search" name='search' type="text"
                 className='p-3 w-full outline-0 text-xs  border-slate-400 text-offwhite-100'
                 placeholder='Search By Email,Company Name or ListingId...'/>
            </div>
            <div>
                <button className=' sm:px-2 sm:w-max w-full  border-[#00000033] text-offwhite-400 text-xs sm:whitespace-nowrap '>Find a Profile</button>
            </div>
        </form>
       
    </div>)
}
export default SearchBar;