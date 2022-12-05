import React from 'react';
import s from './Warning.module.css';
import { setError } from '../../../../bll/app_reducer';
import { useDispatch } from 'react-redux';

export const Warning = React.memo(props => {
  const { text, warningVisible, setWarningVisible, info } = props;
  const dispatch = useDispatch();

  return (
    <div
      className={warningVisible ? s.warning + ' ' + s.active : s.warning}
      onClick={() => {
        setWarningVisible(false);
        dispatch(setError(null));
      }}
    >
      <div className={info ? s.warningCard + ' ' + s.info : s.warningCard}>{text}</div>
    </div>
  );
});
