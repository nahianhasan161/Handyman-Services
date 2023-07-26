import React, { ReactNode } from 'react';

import Table from '../Table/Table';
import Typography from '@/components/Utilities/Typography';
import HeadingType from '@/helper/enums/HeadingType';
type LoginDetailsProps = {
    titles:Array<string>,
    informations:Array<Array<string>>,
    
};

const LoginDetails:React.FC<LoginDetailsProps> = ({titles,informations}) => {
    
  return  (
    <div className='  '>
         
            <div>
         
         <Typography 
         Type={HeadingType.h1}
         Description='Login Details'
         className='font-bold'
         />
        </div>
        <div>
           <Table titles={titles} informations={informations}/> 
        </div>
        </div>
    
  );
}
export default LoginDetails;
