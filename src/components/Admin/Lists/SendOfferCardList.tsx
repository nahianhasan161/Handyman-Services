import React from 'react';
import ReviewCart from '../Cart/ReviewCart';

type SendOfferCardListProps = {
    
};

const SendOfferCardList:React.FC<SendOfferCardListProps> = () => {
    
    const Details = [["IP Address",'106.76.96.0'], ["Login Date",'26/5/2023'],["Login Time",'6:00PM']];
    const Logs = ['Posted on','26/5/2023','6:00PM']
    
    return (<>
    
   

  {/* Example */}
   
  <div className='flex flex-col sm:flex-row items-center gap-3 w-full my-3'>
  <div className='flex-1'>
    <ReviewCart Details={Details}  Logs={Logs} Status='Sent'/>
  </div>
  <div className='flex-1'>

    <ReviewCart Details={Details}  Logs={Logs} Status='Sent'/>
  </div>
</div>
  </>
  );
}
export default SendOfferCardList;