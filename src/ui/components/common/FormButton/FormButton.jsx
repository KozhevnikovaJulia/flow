import React from 'react';
import s from './FormButton.module.css';

export const FormButton = React.memo(props => {
  const { onClick, title, disabled } = props;
  return (  
         <button type={'submit'}  className={s.btn} onClick={onClick} disabled={disabled}>
           {title}
         </button>
  );
});
