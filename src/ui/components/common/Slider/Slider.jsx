import React from 'react';
import s from './Slider.module.css';
import left from '../../../../assets/images/left.png';
import right from '../../../../assets/images/right.png';

export const Slider = React.memo(props => {
  const { value, onChange, name, placeholderText, items } = props;

  const onClickRight = () => {    
    const currentId = items.indexOf(value);
    if(currentId< items.length-1){
      const newValue = items[currentId+1]
      onChange(newValue)
    } else if ( currentId=== items.length-1) {
      const newValue = items[0]
      onChange(newValue)
    }   
  };
  const onClickLeft = () => {
    const currentId = items.indexOf(value);
    if(currentId> 0){
      const newValue = items[currentId-1]
      onChange(newValue)
    } else if ( currentId=== 0) {
      const newValue = items[items.length-1]
      onChange(newValue)
    }   
  };

  return (
    <div className={s.select}>
       <input className={s.select__input} type='hidden' name={name} />
       <div className={s.select__head} >      
             <span className={s.placeholderText}>{placeholderText}</span>  
             <div className={s.contentWrapper}>
                 <img src={left} className={s.img} alt='left' onClick={onClickLeft}/>
                 <span>{value}</span> 
                 <img src={right} className={s.img} alt='rigth' onClick={onClickRight}/>
             </div>       
       </div>
    </div>
  );
});