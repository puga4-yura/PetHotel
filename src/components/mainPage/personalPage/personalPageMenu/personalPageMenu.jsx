import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import s from "./personalPageMenu.module.scss"


let PersonalPageMenu = () => {
  return (
    <nav className={s.menuContainer}>
      <NavLink activeClassName={s.activeLink} className={s.menuItem} to='/Profile'>Мой профиль</NavLink>
      <NavLink activeClassName={s.activeLink} className={s.menuItem} to='/Animal'>Мои животные</NavLink>
      <NavLink activeClassName={s.activeLink} className={s.menuItem} to='/Hotel'>Любимые отели</NavLink>
      <NavLink activeClassName={s.activeLink} className={s.menuItem} to='/History'>История заказов</NavLink>
      <NavLink activeClassName={s.activeLink} className={s.menuItem} to='/Exit'>Выход</NavLink>
    </nav>
  )

}

export default PersonalPageMenu;