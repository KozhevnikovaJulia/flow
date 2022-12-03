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

export const SigninPage = () => {
  const isInitialized = useSelector(state => state.app.isInitialized);
  const [formErrorWarning, setFormErrorWarning] = useState(false);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const history = useHistory();

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
                      <div className={s.formInfoTextWrapper} onClick={()=>{alert('Пароль отправлен на почту')}}>
                          <img src={lock} className={s.lock} alt='lock'/>
                          Восстановить пароль
                      </div>
                 </form>
               )}
             </Formik>
        </div>
    </div>       
</div>
  );
};
