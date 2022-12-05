import React, { useState, useEffect } from 'react';
import s from './SigninPage.module.css';
import { InputForm } from '../../components/common/InputForm/InputForm';
import { FormButton } from '../../components/common/FormButton/FormButton';
import { Warning } from '../../components/common/Warning/Warning';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../bll/app_reducer';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import lock from '../../../assets/images/lock.png';
import { usersData } from '../../../assets/data/users';

export const SigninPage = () => {
  const isInitialized = useSelector(state => state.app.isInitialized);
  const [loginEmptyWarning, setLoginEmptyWarning] = useState(false);
  const [passwordSentToEmail, setPasswordSentToEmail] = useState(false);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickRestorePassword = (email) => {
    const correctEmail = usersData.find(item => item.userEmail === email );
    const currentPassword =  correctEmail ? correctEmail.userPassword  : null
    if(!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) || !correctEmail) {
      setLoginEmptyWarning(true)
    } else {
      setPasswordSentToEmail(true)
    }
  }
  const findLinkClass = (email) => {
    const correctEmail = usersData.find(item => item.userEmail === email );
    if(!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) || !correctEmail) {
      return s.linkDisabled
    } else {
      return s.link
    }
  }

  useEffect(() => {
    isInitialized && history.push('/');
  }, [history, isInitialized]);

  return (
    <div className={s.wrapper}>
    <Header background={'skyBlue'} size={'big'}/>
    <div className={s.content}>
        <div className={s.centerBlock}>
            <div className={s.title}>
                 Flow Budget Video Planner
            </div>            
            <Formik
               initialValues={{ email: '', password: '' }}
               validate={values => {
                 const errors = {};

              if (!values.email) {
                  errors.email = 'Обязательное поле'
              } else 
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                  errors.email = 'Некорректный адрес'
              }
              if (!values.password) {
                  errors.password = 'Обязательное поле'
              }
                 return errors;
               }}
               onSubmit={(values, { resetForm }) => {
                 dispatch(signIn(values.email, values.password));
                 resetForm();
               }}
             >
               {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                 <form onSubmit={handleSubmit} className={s.form} autoComplete='off'>
                      <InputForm autoComplete='off' type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder={'Логин'} error={errors.email} touched={touched.email}/>
                      <InputForm autoComplete='current-password' type={type} setType={setType} name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder={'Пароль'} error={errors.password} touched={touched.password}/>
                      <div className={s.formButtonsWrapper}>
                        <FormButton title={'Войти'} disabled={(!values.email || !values.password || errors.email || errors.password) ? true : false}/>
                      </div> 
                      <div className={s.formInfoTextWrapper} onClick={()=>{onClickRestorePassword(values.email)}}>
                          <img src={lock} className={s.lock} alt='lock'/>
                          <a id='hyperlink' href="#top" className={findLinkClass(values.email)}>Восстановить пароль</a>                          
                      </div>
                 </form>
               )}
             </Formik>
        </div>
    </div>    
    <Warning text={'Для восстановления пароля необходимо ввести корректный адрес'} warningVisible={loginEmptyWarning} setWarningVisible={setLoginEmptyWarning} />  
    <Warning text={'Пароль отправлен на почту'} warningVisible={passwordSentToEmail} setWarningVisible={setPasswordSentToEmail} info/> 
</div>
  );
};
