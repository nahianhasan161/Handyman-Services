import React from 'react';
import Button from '../Button/ActionButton';


type ReviewCartProps = {
    Details:Array<Array<string>>,
   
    Status?:string,
    
    Logs:Array<string>,
    DisableBtn?:boolean,
    
};

const ReviewCart:React.FC<ReviewCartProps> = ({Details,Status,Logs,DisableBtn=false}) => {
    
    
    return (

        <div className='text-offwhite-400 p-5 relative bg-white max-w-[28rem] box-shadow-bottom'>
                {Status && (<span className='text-xs absolute top-5 right-5 text-offwhite-50'>{Status}</span>)}
            <div>
               {Details && Details.map((Detail,index)=>
                <>
                
                <h1 className='font-bold text-sm pb-1' key={index}>{Detail[0]}</h1>
                <p className='text-xs pb-2 max-w-[14rem]'>{Detail[1]}</p>
                </>
               )}
               <p className='flex gap-[0.5rem] sm:gap-5 lg:gap-9 items-center text-xs whitespace-nowrap '>{Logs.map((Log,key)=> <span key={key} className={`${key == 0 ? 'font-bold': ''}`}>{Log}</span> )}</p>
            </div>
           {!DisableBtn && (<div className='text-center  pt-2'>
                <Button title='Edit Review' />
            </div>)}
        </div>
        
    );
}
export default ReviewCart;