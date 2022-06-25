import React, { useEffect, useRef, useState, createContext } from 'react';
import MenuCard from '/components/Main/menu-card';
import Link from 'next/link';
import MainMenu from '/components/Main/main-menu';
import SideMenu from './Side-menu/side-menu';

export const ActiveContext = createContext();

const Main = () => {

  const menuItems = [
    { name: 'SushiMenu' },
    { name: 'Forreter' },
    { name: 'StoreMaki' },
  ];

  const [activeItem, setActiveItem] = useState("");
  const elementRefs = menuItems.map(React.useRef);

  const createObservers = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isInterrsecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { threshold: 1.0 }
    );
    elementRefs.forEach(({ current }) => observer.observe(current));
  };

  useEffect(() => {
    createObservers();
    console.log("active item:  ", activeItem)
  })

  return (
    <>
      <div className="flex flex-end max-h-fit w-full bg-white h-16 items-center justify-center shadow-xl">
        <div className="w-[82%] h-full">
          <MainMenu />
          <div className="flex items-start gap-10 pt-5 max-h-fit">
            <div className="flex flex-col w-fit p-5 pr-10 gap-3 sticky top-0">
              <ActiveContext.Provider value={[activeItem, setActiveItem]}>
                <SideMenu menuItems={menuItems} />
              </ActiveContext.Provider>
            </div>

            <div className="flex flex-col gap-5">
              {menuItems.map((category, i) => (
                <div ref={elementRefs[i]} key={category.name} id={`${category.name.replace(/\s+/g, "")}`}>
                  <span className='text-2xl text-gray-400'>{category.name}</span>
                  <MenuCard />
                  <MenuCard />
                  <MenuCard />
                  <MenuCard />
                  <MenuCard />
                </div>
              ))}
              <div>
                <span id="StoreMaki" className="text-2xl text-gray-400">
                  StoreMaki
                </span>
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-6 bg-white shadow-md rounded-md sticky top-0 mt-5">
              <span>Din Kurv</span>
              <span className="text-center">
                Tilføj produkter til din kurv fra menuen til venstre
              </span>
              <button className=" bg-gray-400 px-5 py-3 w-full text-white rounded-full text-lg font-bold">
                Forsaet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
