import React from 'react';
import InputForm from '../Input/InputForm';

type InputRowProps = {
    title1?:string,
    name1:string,
    type1:string,
    placeholder1?:string,
    title2?:string,
    name2:string,
    type2:string,
    placeholder2?:string,
};

const InputRow:React.FC<InputRowProps> = ({ title1,name1,type1,placeholder1,title2,name2,type2,placeholder2}) => {
    
    return (<div className='grid grid-cols-1 md:grid-cols-12 gap-2 items-center pb-5 sm:pl-5 sm:pr-10  min-w-[20rem]'>
    <div className='col-span-6'>
    <InputForm title={title1} name={name1} type={type1} placeholder={placeholder1}  />

    </div>
    <div className='col-span-6'>
    <InputForm title={title2} name={name2} type={type2} placeholder={placeholder2}  />
    

    </div>

</div>)
}
export default InputRow;