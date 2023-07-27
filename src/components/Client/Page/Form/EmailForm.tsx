import ActionButton from '@/components/Admin/Button/ActionButton';
import InputRow from '@/components/Admin/Section/InputRow';
import React from 'react';

type EmailFormProps = {
    
};

const EmailForm:React.FC<EmailFormProps> = () => {
    
    return (<section className='sm:p-5 p-3 bg-white box-shadow-bottom '>
       
           
    <InputRow
    title1='New Email'
    name1='new_email'
    type1='email'
    placeholder1='abc@gmail.com'
    title2='Confirm Email'
    name2='confirm_email'
    type2='email'
    placeholder2='xyz@gmail.com'
    />
    <ActionButton title='Save Changes' className='float-right'/>


</section>)
}
export default EmailForm;