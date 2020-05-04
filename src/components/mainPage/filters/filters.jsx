import React from 'react';
import s from './filters.module.scss'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'


let Filter = () => {
  const option = [
    {value: 'выгул', label: 'sadsad' },
    {value: 'jkblglj1', label: 'adsdad'},    {value: 'выгул31', label: 'sadsad' },
    {value: 'jkblglj2', label: 'adsdad'},    {value: 'выгул12', label: 'sadsad' },
    {value: 'jkblglj3', label: 'adsdad'},    {value: 'выгул21', label: 'sadsad' },
    {value: 'jkblglj4', label: 'adsdad'},    {value: 'выгул61', label: 'sadsad' },
    {value: 'jkblglj5', label: 'adsdad'},    {value: 'выгул', label: 'sadsad' },
    {value: 'jkblglj6', label: 'adsdad'},
  ];

  const customTheme = {
    control: (customTheme) => ({
      ...customTheme,
      minHeight: 92,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  }

  return(
    <section className={s.filterContainer}>
      <div className={s.filterWrap}>
        <div className={s.filterContainer_selectWrap}>
          <Select
            options={option}
            theme={customTheme}
            placeholder="Животные"
            сlassName="select"
            width='200px'
            isMulti
            autoFocus
            //isSearchable
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