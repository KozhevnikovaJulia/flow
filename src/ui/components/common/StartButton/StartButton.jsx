import React from 'react';
import s from './StartButton.module.css';

export const StartButton = React.memo(props => {
  const { onClick, children, title } = props;

  return (
    <div>
      <button className={s.btn} onClick={onClick} >
        {children}
        {title}
      </button>
    </div>
  );
});

