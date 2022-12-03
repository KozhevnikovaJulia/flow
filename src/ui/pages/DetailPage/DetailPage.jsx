import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DetailPage.module.css';
import { Header } from '../../components/Header/Header'

export const DetailPage = React.memo(props => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>


      </div>       
    </div>
  );
});
