import React, { useEffect, useState, useRef, createRef } from 'react';
import MenuItem from './menu-item';
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
  const [activeItem, setActiveItem] = useState('SushiMenu');
  const refs = useRef([]);
  const [selected, setSelected] = useState();

  const elementRefs = menuItems.map(React.useRef);

  const createObservers = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isInterrsecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { threshold: 1.0 }
    );
    elementRefs.forEach(({ current }) => observer.observe(current));
  };

  useEffect(() => {
    createObservers();

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

    console.log('Current section:', curSection);
  };

  const menuList = menuItems.map((category, i) => (
    <MenuItem
      ref={elementRefs[i]}
      id={`${category.name.replace(/\s+/g, '')}`}
      key={category.name}
    />
  ));

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
