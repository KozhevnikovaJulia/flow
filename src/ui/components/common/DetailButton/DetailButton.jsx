import React from 'react';
import s from './DetailButton.module.css';

export const DetailButton = React.memo(props => {
  const { onClick, title, isDisabled } = props;
  return (
    <div>
      <button className={s.btn} onClick={onClick} disabled={isDisabled ? true : false}>
        {title}
      </button>
    </div>
  );
});
