import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faShieldHalved,
  faHandshake,
  faCoins,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
const cardItems = [
  {
    id: 1,
    icon: faShieldHalved,
    title: "Güvenli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos doloremque excepturi vero veritatis, non cupiditate doloribus ipsam voluptates repellendus?",
  },
  {
    id: 2,
    icon: faHandshake,
    title: "Kullanıcı Dostu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos doloremque excepturi vero veritatis, non cupiditate doloribus ipsam voluptates repellendus?",
  },
  {
    id: 3,
    icon: faCoins,
    title: "Düşük Komisyon",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos doloremque excepturi vero veritatis, non cupiditate doloribus ipsam voluptates repellendus?",
  },
  {
    id: 4,
    icon: faHeadset,
    title: "7/24 Destek",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos doloremque excepturi vero veritatis, non cupiditate doloribus ipsam voluptates repellendus?",
  },
];

const cardAbout = [
  {
    id: 1,
    title: "Kripto Paralar",
  },
  {
    id: 2,
    title: "Barista Coin'de Neler Var?",
  },
  {
    id: 3,
    title: "Barista Eğitim",
  },
];
const ThirdChild = () => {
  return (
    <section className="min-[2580px]:h-full py-5 md:h-screen flex flex-col gap-3 items-center justify-evenly snap-mandatory scroll-smooth overflow-y-auto snap-center  text-indigo-50 bg-gradient-to-tr from-indigo-950 to-indigo-900 bg-opacity-50">
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="text-center">
          <p>Barista Coin ile tanışın!</p>
          <h4 className="text-3xl font-semibold">Neden Barista Coin?</h4>
        </div>
        <div className="grid min-[280px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardItems.map((card) => {
            return (
              <div
                key={card.id}
                className="p-4 rounded-md shadow-md bg-indigo-950 bg-opacity-50 flex flex-col items-center gap-2"
              >
                <span className="hover:scale-90 duration-300">
                  <FontAwesomeIcon icon={card.icon} className="w-10" />
                </span>
                <h6>{card.title}</h6>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="text-center">
          <p className="capitalize">Kripto para dünyasına hemen girin</p>
          <h4 className="capitalize text-3xl font-semibold">
            Kripto para hakkında herşey
          </h4>
        </div>
        <div className="grid min-[280px]:grid-cols-1 min-[280px]:w-full md:grid-cols-3 gap-3">
          {cardAbout.map((card) => {
            return (
              <div
                key={card.id}
                className="p-4 shadow-md flex gap-2 items-center bg-indigo-950 bg-opacity-50 rounded-md"
              >
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="hover:scale-90 duration-300 w-10"
                />
                <div>
                  <h6>{card.title}</h6>
                  <span className="text-xs text-gray-400">Barista Blog</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdChild;
