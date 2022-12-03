import React from 'react';
import { useDispatch } from 'react-redux';
import s from './HomePage.module.css';
import { Header } from '../../components/Header/Header';
import { StartButton } from '../../components/common/StartButton/StartButton';
import grade from '../../../assets/images/grade.png';
import dashboard from '../../../assets/images/dashboard.png';
import { useHistory } from 'react-router-dom';

export const HomePage = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickEvaluateTheNewFlight = () => {
    history.push('/chart');
  }
  return (
    <div className={s.wrapper}>
        <Header size={'big'}/>
        <div className={s.content}>
            <div className={s.centerBlock}>
                <div className={s.title}>
                     Flow Budget Video Planner
                </div>            
                <div className={s.btnsBlock}>
                  <StartButton  onClick={onClickEvaluateTheNewFlight} title={'Оценить новый\n TV & OLV флайт'}>
                      <img src={grade} alt='grade' style={{ width: '50px', height: '50px' }} /> 
                  </StartButton>
                  <StartButton  onClick={()=>{}} title={'Перейти в дашборд\n существующего\n флайта'}>
                      <img src={dashboard} alt='dashboard' style={{ width: '50px', height: '50px' }} /> 
                  </StartButton>
                </div>          
            </div>
        </div>       
    </div>
  );
});
