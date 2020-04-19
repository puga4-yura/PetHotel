import React from 'react';
import s from './header.module.scss'

export let Header = () => {
  return(
    <header className={s.header}>
      <div className={s.header_mainLogo}></div>
      <div className={s.header_searchWrap}><input type="search" placeholder="search"/></div>
      <div className={s.header_selectWrap}>
        <select name="" id="">
          <option>Киев</option>
        </select>
      </div>
      <div className={s.header_selectWrap}>
        <select name="" id="">
          <option><img src="../../assets/img/flag.png" alt="flag"/>укр</option>
        </select>
      </div>
      <div className={s.header_buttonWrap}>
        <button className={s.header_registrationBtn}>Регистрация</button>
        <button className={s.header_enterBtn}>Вход</button>
      </div>

    </header>
  )
}