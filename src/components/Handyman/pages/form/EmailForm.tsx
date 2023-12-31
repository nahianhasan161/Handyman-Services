import ActionButton from '@/components/Admin/Button/ActionButton';
import InputRow from '@/components/Admin/Section/InputRow';
import React from 'react';

type EmailFormProps = {
    
};

const EmailForm:React.FC<EmailFormProps> = () => {
    
    return (<div className='bg-white sm:p-5 p-3 box-shadow-bottom sm:m-5 m-1'>
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
        </div>)
}
export default EmailForm;