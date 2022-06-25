import React, { useEffect, useState, useRef, createRef, useContext } from 'react';
import MenuItem from './menu-item';
import { ActiveContext } from '../main';
// import 'mutationobserver-shim'

// const menuItems = {
//   SushiMenu: 0,
//   Forreter: null,
//   StoreMaki: null,
//   SpecialRoll: null,
//   Nigiri: null,
// };

const menuItems = [
  { name: 'SushiMenu' },
  { name: 'Forreter' },
  { name: 'StoreMaki' },
];

const SideMenu = () => {
  const [activeItem, setActiveItem] = useContext(ActiveContext);

  useEffect(() => {
    console.log("Menu List", menuList)
  });

  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;

    for (const section in menuItems) {
      curSection = menuItems[section] >= curPos ? section : curSection;
      if (curSection !== section) {
        break;
      }
    }

    if (curSection !== activeItem) {
      setActiveItem(curSection);
    }
  };

    const Menu = (menuList, active) => menuList.map((el) => {
      const {name} = el;
      return <MenuItem itemName={name} key={name} active={active}/>
    })

  const menuList = Menu(menuItems.slice(0, menuItems.length), activeItem) 

  return (
    <>
      <section className="space-y-4">
        <span className="text-gray-600 text-xl font-bold uppercase">
          KATEGORIER
        </span>
        <ul className="space-y-3">{menuList}</ul>
      </section>
    </>
  );
};

export default SideMenu;
