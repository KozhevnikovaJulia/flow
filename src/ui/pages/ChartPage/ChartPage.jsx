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
  return (
    <div className={s.wrapper}>
        <Header size={'small'}/>
        <div className={s.content}>
           <div className={s.inputDataBlock}>
               <div className={s.selectWrapper}>
                   <Select items={['All 25-45 BC', 'W 25-55 BC','M 20-45 BC']} value={ta} onChange={onChangeTa} name={'ta'} placeholderText={'ЦА'}/>
                   <Select items={['март', 'август', 'октябрь']} value={period} onChange={onChangePeriod} name={'period'} placeholderText={'Период'}/>
                   <Select items={['1', '2', '3', '4', '5', '6', '7', '8', '9']} value={frequency} onChange={onChangeFrequency} name={'frequency'} placeholderText={'Частрота'}/>
                   <Slider items={['5', '10', '15', '20', '25', '30']} value={mediumHrono} onChange={onChangeMediumHrono} name={'mediumHrono'} placeholderText={'Средний хронометраж'}/>
                   <Slider items={['20%', '25%', '30%', '35%', '40%']} value={maxShareOlv} onChange={onChangeMaxShareOlv} name={'maxShareOlv'} placeholderText={'Максимальная доля OLV'}/>
               </div>
               <img src={rightArrow} className={s.arrowRight} alt='arrowRight'  /> 
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
               {/* <div className={s.title}>Результат</div>
               <ResultChart/>
               <div className={s.spansBlock}>
                    <span className={s.span}>Reach 5+  38%</span>
                    <span className={s.span}>CPRP 3+ 50 000 руб</span>
                    <span className={s.span}>Total budget: 50 000 000</span>
               </div> */}
           </div>      
           <div className={s.detailBtn}> 
                <DetailButton onClick={onClickDetail} title={'Детализация'} isDisabled={false} /> 
           </div>               
        </div> 
            
    </div>
  );
};
