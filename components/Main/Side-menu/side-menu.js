import React, { useEffect, useState, useRef, createRef } from 'react';
import MenuItem from './menu-item';
// import 'mutationobserver-shim'

const menuItems = {
  SushiMenu: 0,
  Forreter: null,
  StoreMaki: null,
  SpecialRoll: null,
  Nigiri: null,
};

const SideMenu = () => {
  const [activeItem, setActiveItem] = useState('SushiMenu');
  const refs = useRef([]);


  useEffect(() => {
   window.addEventListener('scroll', handleScroll);
  }, [activeItem]);

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

    console.log('Current section:', curSection)
  };


  const menuList = Object.keys(menuItems).map((e, i) => (
    <MenuItem
      itemName={e}
      key={`menuitem_${i}`}
      active={e === activeItem ? true : false}
    />
  ));

  const scrollToRef = () => {
    refs[0].scrollIntoView();
  };

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
