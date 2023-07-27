import React from 'react';
import ReviewCart from '../Cart/ReviewCart';

type OffersSectionProps = {
    Details:Array<Array<string>>,
   
    Status?:string,
    DisableBtn?:boolean,
    
    Logs:Array<string>,
};

const OffersSection:React.FC<OffersSectionProps> = ({Details,Logs,Status,DisableBtn=false}) => {
    
    return  <div className='flex flex-col sm:flex-row items-center gap-3 w-full '>
    <div className='flex-1'>
      <ReviewCart Details={Details}  Logs={Logs} Status={Status} DisableBtn={DisableBtn}/>
    </div>
    <div className='flex-1'>

      <ReviewCart Details={Details}  Logs={Logs} Status={Status} DisableBtn={DisableBtn}/>
    </div>
  </div>
}
export default OffersSection;