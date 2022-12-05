import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './DetailPage.module.css';
import { Header } from '../../components/Header/Header';
import { DetailRow } from '../../components/common/DetailRow/DetailRow';
import { DetailButton } from '../../components/common/DetailButton/DetailButton';
import { useHistory } from 'react-router-dom';
import rightArrow from '../../../assets/images/rightArrow.png';

export const DetailPage = React.memo(props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ta = useSelector(state => state.input.ta);
  const period = useSelector(state => state.input.period);
  const frequency = useSelector(state => state.input.frequency);
  const mediumHrono = useSelector(state => state.input.mediumHrono);
  const maxShareOlv = useSelector(state => state.input.maxShareOlv);

  const onClickBack = () => {
    history.push('/chart');
  }
  return (
    <div className={s.wrapper}>
       <Header/>
       <div className={s.content}>
            <div className={s.arrowBlock}>
                 <img src={rightArrow} className={s.arrowRight} alt='arrowRight'  /> 
            </div>          
            <div className={s.detailBlock}>
                 <div className={s.detail}>
                     <div className={s.title}>Детализация</div>
                     <div className={s.rowWrapper}>
                         <DetailRow parameter={'Доля ТВ'} parameterValue={'70%'}/>
                         <DetailRow parameter={'Бюджет ТВ (руб)'} parameterValue={'35 000 000'}/>
                         <DetailRow parameter={'Доля OLV'} parameterValue={'30%'}/>
                         <DetailRow parameter={'Бюджет OLV (руб)'} parameterValue={'15 000 000'} bottom/>
                     </div>
                 </div>
                 <div className={s.detail}>
                     <div className={s.title}>KPI</div>
                     <div className={s.rowWrapper}>
                         <DetailRow parameter={'ЦА'} parameterValue={ta}/>
                         <DetailRow parameter={'Период'} parameterValue={'03.04.2023-23.04.2023'}/>
                         <DetailRow parameter={'Reach'} parameterValue={'5+, 38%'}/>
                         <DetailRow parameter={'Средний хронометраж в ТВ'} parameterValue={mediumHrono} bottom/>
                     </div>
                 </div>
            </div>      
            <div className={s.chartBlock}>
                <div className={s.chart}></div>   
                <div className={s.detailBtn}> 
                    <DetailButton onClick={onClickBack} title={'Вернуться назад'} isDisabled={false} /> 
                </div>  
            </div>    
       </div>     
    
    </div>
  );
});
