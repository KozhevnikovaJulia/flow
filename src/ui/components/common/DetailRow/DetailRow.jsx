import React from 'react';
import s from './DetailRow.module.css';

export const DetailRow = React.memo(props => {
  const { parameter, parameterValue, bottom } = props;
  
  return (
    <div className={!bottom ? `${s.wrapper} ${s.border}` : s.wrapper}>
      <span className={s.parameter}> {parameter} </span>
      <span className={s.parameterValue}> {parameterValue} </span>
    </div>
  );
});