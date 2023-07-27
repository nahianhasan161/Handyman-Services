import React from 'react';
import InputRow from '@/components/Admin/Section/InputRow';
import ActionButton from '@/components/Admin/Button/ActionButton';
type PasswordFormProps = {
    
};

const PasswordForm:React.FC<PasswordFormProps> = () => {
    
    return (<section className='p-5 bg-white mt-10  py-2 sm:py-5 lg:py-10 box-shadow-bottom '>
    <div >
    
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
</div>

   </section>)
}
export default PasswordForm;