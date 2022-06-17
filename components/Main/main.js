import React, { useEffect, useRef, useState } from 'react';
import MenuCard from '/components/Main/menu-card';
import Link from 'next/link';
import MainMenu from '/components/Main/main-menu';
import SideMenu from './Side-menu/side-menu';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Main = () => {
  const [refs, setRefs] = useState([]);
  const executeScroll = () => scrollToRef(myRef);
  const someRef = useRef();

  const handleOnClick = (event, ref) => {
    refToScroll = refs.indexOf(ref);
    refToSroll.scrollIntoView();
  };

  useEffect(() => {
    console.log('someRef', someRef.current);
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry);
      console.log('entry.isIntersecting', entry.isIntersecting);
    });
    observer.observe(someRef.current);
  }, []);

  return (
    <>
      <div className="flex flex-end max-h-fit w-full bg-white h-16 items-center justify-center shadow-xl">
        <div className="w-[82%] h-full">
          <MainMenu />
          <div className="flex items-start gap-10 pt-5 max-h-fit">
            <div className="flex flex-col w-fit p-5 pr-10 gap-3 sticky top-0">
              <SideMenu />
              {/* <span className="text-lg font-bold text-gray-700">
                KATEGORIER
              </span>
              <span className="text-lg text-gray-400">Menu 1</span>
              <span className="text-lg text-gray-400">Menu 2</span>
              <span className="text-lg text-gray-400">Menu 3</span> */}
            </div>
            <div className="flex flex-col gap-5">
              <div id="Top"></div>
              <div>
                <span
                  ref={someRef}
                  id="SushiMenu"
                  className="text-2xl text-gray-400"
                >
                  Sushi Menu
                </span>
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <div>
                <span id="Forreter" className="text-2xl text-gray-400">
                  Forreter
                </span>
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <div>
                <span id="StoreMaki" className="text-2xl text-gray-400">
                  Store Maki
                </span>
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <div>
                <span id="SpecialRoll" className="text-2xl text-gray-400">
                  Special Roll
                </span>
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <div>
                <span id="Nigiri" className="text-2xl text-gray-400">
                  Nigiri
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
