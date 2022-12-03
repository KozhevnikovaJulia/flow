import React, { useState, useEffect } from 'react';
import s from './Select.module.css';
import down from '../../../../assets/images/down.png';

export const Select = React.memo(props => {
  const { items, value, onChange, name, placeholderText } = props;
  
  const [selectListVisible, setSelectListVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(value);
  const onClickSelect = () => {
    setSelectListVisible(!selectListVisible);
  };
  useEffect(() => {
    setSelectedCategories(value);
  }, [value]);
  return (
    <div className={s.select}>
       <input className={s.select__input} type='hidden' name={name} />
      <div className={s.select__head} onClick={onClickSelect}>         
            {(selectListVisible || selectedCategories !== '') ? null :   <div> <span className={s.placeholderText}>{placeholderText}</span><img src={down} className={s.img} alt='down' /></div>}
            {selectedCategories}        
      </div>
      <ul className={s.select__list} onPointerLeave={() => {}} style={selectListVisible ? { display: 'inLine' } : { display: 'none' }}>
        {items.map((item, index) => (
          <li
            key={index}
            className={s.select__item}
            onClick={() => {
              setSelectedCategories(item);
              setSelectListVisible(false);
              onChange(item, name);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});