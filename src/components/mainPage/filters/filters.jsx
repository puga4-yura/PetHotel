import React from 'react';
import s from './filters.module.scss'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const option = [
  {value: 'выгул', label: '' },
  {value: 'jkblglj', label: ''}
];
let Filter = () => {
  const option = [
    {value: 'выгул', label: 'sadsad' },
    {value: 'jkblglj', label: 'adsdad'}
  ];

  function customTheme(theme) {
    return{
      ...theme,
      colors: {
        ...theme.colors,
        primary25 : 'orange',
        primary: 'green'
      }
    }
  }

  return(
    <section className={s.filterContainer}>
      <div className={s.filterWrap}>
        <div className={s.filterContainer_selectWrap}>
          <Select
            options={option}
            theme={customTheme}
            placeholder="Животные"
          />
        </div>
        <div className={s.filterContainer_selectWrap}>
          <Select
            options={option}
            theme={customTheme}
            placeholder="Услуги"
          />
        </div>
        <div className={s.filterContainer_selectWrap}>
          <Select
            options={option}
            theme={customTheme}
            placeholder="Вес"
          />
       </div>

      </div>
      <div className={s.filterContainer_selectWrap}>
        <button className={s.filterContainer_button}>Поиск</button>
      </div>

    </section>
  )
}

export default Filter;