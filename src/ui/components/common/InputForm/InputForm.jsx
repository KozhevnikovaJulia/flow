import s from './InputForm.module.css';
import eye from '../../../../assets/images/eye.png';

export const InputForm = ({ meta, ...props }) => {
  const onClickEye = () => {
    if (props.type==='password') {
      props.setType('text')
    } else {
      props.setType('password')
    }}
  return (
    <div className={s.inputWrapper}>
        <input className={(props.touched && props.error) ? s.inputFormError : s.inputForm} onFocus={e => e.currentTarget.select()} {...props} />
        {props.name=== 'password' && <img src={eye} className={s.eye} alt='leye' onClick={onClickEye}/>} 
        {(props.touched && props.error) ? <div className={s.formError}> {props.error} </div> : null} 
    </div>
  );
};
