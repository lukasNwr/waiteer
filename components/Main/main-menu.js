import Link from 'next/link';
const MainMenu = () => {
  return (
    <>
      <div className="flex items-end gap-10 h-full bg-white font-bold">
        <div className="flex flex-col justify-center items-center">
          <Link href="#">
            <a className="text-waiteerPink">Menu</a>
          </Link>
          <div className="w-16 h-1 bg-waiteerPink" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#">
            <a className="text-black hover:text-waiteerPink">Info</a>
          </Link>
          <div className="invisible hover:visible w-16 h-1 bg-waiteerPink" />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
