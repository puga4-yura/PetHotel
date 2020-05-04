import React from 'react';
import s from './header.module.scss'
import Select from 'react-select'
import ModalEnter from "./modalEnter/modalContainer"
import {showModalEnterAC} from "../../redux/header-reducer";

let Header = (props) => {
  const city = [
    {value: 'выгул', label: 'киев' },
    {value: 'jkblglj1', label: 'Одеса'},
    {value: 'выгул31', label: 'Xарьков' },

  ];
  const country = [
    {value: 'выгул', label: 'Укр' },
    {value: 'jkblglj1', label: 'Рус'},
    {value: 'выгул31', label: 'Aнгл' },

  ];

  let show = () => {
    props.showModalEnterAC()
  };

  return(<>
    <header className={s.header}>
      <div className={s.header_mainLogo}></div>
      <div className={s.header_searchWrap}><input type="search" placeholder="search"/></div>
      <div className={s.header_selectWrap}>
        <Select
          options={city}
          placeholder="Город"
          сlassName="select"
          width='200px'
          autoFocus
          //isSearchable
        />
      </div>
      <div className={s.header_selectWrap}>
        <Select
        options={country}
        placeholder="Язык"
        сlassName="select"
        width='200px'
        autoFocus
        //isSearchable
        />
      </div>
      <div className={s.header_buttonWrap}>
        <button className={s.header_registrationBtn}>Регистрация</button>
        <button onClick={show} className={s.header_enterBtn}>Вход</button>
      </div>

    </header>
      {props.state.isShowEnterForm ? <ModalEnter />: undefined}
    </>
  )
}

export default Header;