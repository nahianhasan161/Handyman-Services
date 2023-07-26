import React from 'react';
import OffersSection from '../../Section/OffersSection';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';

type AcceptedOfferCardListProps = {
    
};

const AcceptedOfferCardList:React.FC<AcceptedOfferCardListProps> = () => {
    const Details = [["IP Address",'106.76.96.0'], ["Login Date",'26/5/2023'],["Login Time",'6:00PM']];
    
    
    const Logs = ['Posted on','26/5/2023','6:00PM']
    return <div>
         <div className='py-3'>
         <Typography Type={HeadingType.h1} Description='Accepted Offers' className='font-bold'/>
        </div>
        {/* Content Part */}
           <OffersSection 
           Details={Details} 
           Logs={Logs}
           Status='Accepted'
           />
    </div>
}
export default AcceptedOfferCardList;