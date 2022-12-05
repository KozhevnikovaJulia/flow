import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ChartPage.module.css';
import { Header } from '../../components/Header/Header';
import { Select } from '../../components/common/Select/Select';
import { Slider } from '../../components/common/Slider/Slider';
import { ResultChart } from '../../components/Charts/ResultChart/ResultChart';
import { DetailButton } from '../../components/common/DetailButton/DetailButton';
import rightArrow from '../../../assets/images/rightArrow.png';
import { useHistory } from 'react-router-dom';
import { setTa, setPeriod, setFrequency, setMediumHrono, setMaxShareOlv } from '../../../bll/inputParameters_reducer';

export const ChartPage = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ta = useSelector(state => state.input.ta);
  const period = useSelector(state => state.input.period);
  const frequency = useSelector(state => state.input.frequency);
  const mediumHrono = useSelector(state => state.input.mediumHrono);
  const maxShareOlv = useSelector(state => state.input.maxShareOlv);

  const taItemsArr = useSelector(state => state.input.taItemsArr);
  const periodItemsArr = useSelector(state => state.input.periodItemsArr);
  const frequencyItemsArr = useSelector(state => state.input.frequencyItemsArr);
  const mediumHronoItemsArr = useSelector(state => state.input.mediumHronoItemsArr);
  const maxShareOlvItemsArr = useSelector(state => state.input.maxShareOlvItemsArr);
 
  const onChangeTa = (newValue) => {
    dispatch(setTa(newValue))
  }
  const onChangePeriod = (newValue) => {
    dispatch(setPeriod(newValue))
  }
  const onChangeFrequency = (newValue) => {
    dispatch(setFrequency(newValue))
  }
  const onChangeMediumHrono = (newValue) => {
    dispatch(setMediumHrono(newValue))
  }
  const onChangeMaxShareOlv = (newValue) => {
    dispatch(setMaxShareOlv(newValue))
  }
  const onClickDetail = () => {
    history.push('/detail');
  }
  const onClickBack = () => {
    history.push('/home');
  }
  return (
    <div className={s.wrapper}>
        <Header size={'small'}/>
        <div className={s.content}>
           <div className={s.inputDataBlock}>
               <div className={s.selectWrapper}>
                   <Select items={taItemsArr} value={ta} onChange={onChangeTa} name={'ta'} placeholderText={'ЦА'}/>
                   <Select items={periodItemsArr} value={period} onChange={onChangePeriod} name={'period'} placeholderText={'Период'}/>
                   <Select items={frequencyItemsArr} value={frequency} onChange={onChangeFrequency} name={'frequency'} placeholderText={'Частрота'}/>
                   <Slider items={mediumHronoItemsArr} value={mediumHrono} onChange={onChangeMediumHrono} name={'mediumHrono'} placeholderText={'Средний хронометраж'}/>
                   <Slider items={maxShareOlvItemsArr} value={maxShareOlv} onChange={onChangeMaxShareOlv} name={'maxShareOlv'} placeholderText={'Максимальная доля OLV'}/>
               </div>
               <img src={rightArrow} className={s.arrowRight} alt='arrowRight'  /> 
               <div className={s.backBtn}> 
                   <DetailButton onClick={onClickBack} title={'Вернуться назад'} isDisabled={false} /> 
               </div>  
           </div>          
           <div className={s.chartBlock}>
               <div className={s.chartWrapper}>
                   <div className={s.title}>Результат</div>
                   <ResultChart/>
                   <div className={s.spansBlock}>
                        <span className={s.span}>Reach 5+  38%</span>
                        <span className={s.span}>CPRP 3+ 50 000 руб</span>
                        <span className={s.span}>Total budget: 50 000 000</span>
                   </div>
               </div>
               <div className={s.detailBtn}> 
                   <DetailButton onClick={onClickDetail} title={'Детализация'} isDisabled={false} /> 
               </div>  
           </div>      
             
        </div> 
            
    </div>
  );
};
