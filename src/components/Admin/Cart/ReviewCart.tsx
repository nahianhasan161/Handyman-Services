import React from 'react';


type ReviewCartProps = {
    Titles:Array<string>,
    Values:Array<string>,
    Status:string,
    Infos:Array<string>
};

const ReviewCart:React.FC<ReviewCartProps> = ({Titles,Values,Status,Infos}) => {
    
    
    return (<div className='bg-white p-3'>

        <div className='text-offwhite-400 p-5 relative'>
                <span className='text-xs absolute top-5 right-5 text-offwhite-50'>{Status}</span>
            <div>
               {Titles && Titles.map((title,index)=>
                <>
                
                <h1 className='font-bold text-md ' key={index}>title</h1>
                <p className='text-xs'>{Values[index]}</p>
                </>
               )}
               <p>{Infos.map((info,key)=> <p key={key}>{info}</p> )}</p>
            </div>
            <div >
            </div>
        </div>
        
    </div>);
}
export default ReviewCart;