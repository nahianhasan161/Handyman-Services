import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
import React from 'react';
import OffersSection from '../../Section/OffersSection';

type UnAcceptedOfferCardListProps = {
    
};

const UnAcceptedOfferCardList:React.FC<UnAcceptedOfferCardListProps> = () => {
     const Details = [["Job Title",'Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin'], ["Login Date",'26/5/2023'],["Price",'$250']];
    
    
    const Logs = ['Posted on','26/5/2023','6:00PM']
    return (
        <div>
             <div>
         <Typography 
         Type={HeadingType.h1}
         Description='Un Accepted Offers'
         className='font-bold'
         
         />
        </div>
        {/* Content Part */}
           
            <OffersSection 
            Details={Details}
            Logs={Logs}
            Status='Un Accepted'
            DisableBtn={true} 
            />
    
        </div>
    );
}
export default UnAcceptedOfferCardList;