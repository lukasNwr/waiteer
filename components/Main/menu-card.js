import Image from 'next/image';
const MenuCard = () => {
  return (
    <>
      <div className="flex w-[38rem] bg-white p-8 rounded-md ">
        <div className="flex flex-col gap-3">
          <span className="text-lg">Menu 1</span>
          <span className="text-[0.8rem] text-gray-400 pr-3 ">
            16 stk. 8 stk. Inside-out maki: Crispy Ebi 8 stk. små maki med
            avocado Tilbehør: wasabi, ingefær og 1 stor soya.
          </span>
          <div className="flex items-center justify-center bg-gray-100 w-fit py-2 px-4 rounded-full">
            <span className="text-xs font-bold">105.00 dkk</span>
          </div>
        </div>
        <Image
          src="/food1.png"
          height={110}
          width={160}
          layout="fixed"
          className="rounded-xl"
        />
      </div>
    </>
  );
};

export default MenuCard;
