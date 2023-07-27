import ActionButton from '@/components/Admin/Button/ActionButton';
import InputRow from '@/components/Admin/Section/InputRow';
import React from 'react';

type PasswordFormProps = {
    
};

const PasswordForm:React.FC<PasswordFormProps> = () => {
    
    return (<div className='bg-white sm:p-5 p-3 mt-5 box-shadow-bottom sm:m-5 m-1'>
    <InputRow 
        name1='old_password'
        title1='Old Password'
        type1='password'
        placeholder1='********'
        name2='new_password'
        title2='New Password'
        type2='password'
        placeholder2='********'
        />
        <ActionButton title='Save Changes' className='float-right'/>
    </div>);
}
export default PasswordForm;