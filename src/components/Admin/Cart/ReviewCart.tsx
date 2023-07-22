import React from 'react';
import Button from '../Button/ActionButton';


type ReviewCartProps = {
    Details:Array<Array<string>>,
   
    Status:string,
    Logs:Array<string>
};

const ReviewCart:React.FC<ReviewCartProps> = ({Details,Status,Logs}) => {
    
    
    return (

        <div className='text-offwhite-400 p-5 relative bg-white max-w-[28rem]'>
                <span className='text-xs absolute top-5 right-5 text-offwhite-50'>{Status}</span>
            <div>
               {Details && Details.map((Detail,index)=>
                <>
                
                <h1 className='font-bold text-sm pb-1' key={index}>{Detail[0]}</h1>
                <p className='text-xs pb-2 max-w-[14rem]'>{Detail[1]}</p>
                </>
               )}
               <p className='flex gap-9 items-center text-xs '>{Logs.map((Log,key)=> <span key={key} className={`${key == 0 ? 'font-bold': ''}`}>{Log}</span> )}</p>
            </div>
            <div className='text-center  pt-2'>
                <Button title='Edit Review' />
            </div>
        </div>
        
    );
}
export default ReviewCart;