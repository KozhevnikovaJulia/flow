import React from 'react';
import s from './Header.module.css';
import logo from '../../../assets/images/logo.png';
import { COLORS } from '../../../assets/colors';


export const Header = React.memo((props) => {
  const { size } = props
  return (
    <div className={s.wrapper} >
        <img src={logo} className={size==='big' ? s.bigLogo : s.smallLogo} alt='logo' /> 
    </div>
  );
});
