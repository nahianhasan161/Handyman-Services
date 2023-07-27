import React from 'react';
import InputRow from '../../Section/InputRow';

type EmailFormProps = {
    
};

const EmailForm:React.FC<EmailFormProps> = () => {
    
    return (<div>
        <div className='bg-white pb-10 box-shadow-bottom'>
           
           <InputRow 
           name1='old_email'
           title1='Old Email'
           type1='email'
           placeholder1='abc@gmail.com'
           name2='new_email'
           title2='New Email'
           type2='email'
           placeholder2='xyz@gmail.com'
           />
           
         
       </div>
    </div>)
}
export default EmailForm;