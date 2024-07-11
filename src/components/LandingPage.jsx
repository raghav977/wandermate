import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import BGImg from "../assets/bg8.jpg";
import HeaderImage from "../assets/headerImg5.jpg";
import { landingFooterLinks } from "../helper/data";
import { landingHeaderLinks } from "../helper/data";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* encapsulates all */}
      <div
        className="h-screen w-full flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)),url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* header */}
        <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 md:flex md:justify-around lg:flex lg:justify-between items-center">
          <RxHamburgerMenu
            size={25}
            color="white"
            className="cursor-pointer lg:hidden md:hidden mt-10"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <div className="hidden lg:block md:block">
            <h2 className="text-4xl cursor-pointer"><span className="text-white">Expl</span><span className="text-yellow-500">ore</span></h2>
          </div>
          <div className="hidden lg:flex md:flex">
            {
                landingHeaderLinks.map((item)=>(
                    <Link to={item.link}
                     className="list-none p-4 text-lg lg:flex lg:flex-row  rounded-lg cursor-pointer" key={item.id} ><p className="text-white font-serif hover:bg-gray-200">{item.title}</p></Link>
                )) 
            }
          </div>
          <img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            className="h-52 w-40 object-cover hidden lg:block md:block"
            src={HeaderImage}
            alt="image"
          />
        </div>

        {/* side menu */}
        <motion.div initial={{ x: open? 400:0}} animate={{x: open? 0: 600}} transition={{duration:0.5} }
          className={`
            h-screen w-[80%] md:hidden fixed top-0 right-0 bg-white z-50 rounded-lg`}
        >
            {
                landingHeaderLinks.map((item)=>(
                    <Link to={item.link}
                     className="list-none flex p-4 text-lg hover:bg-gray-200 rounded-lg cursor-pointer" key={item.id} ><p className="text-black ">{item.title}</p></Link>
                )) 
            }
        </motion.div>

        {/* hero */}
        <div className="w-full text-center text-white">
          <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">
            The Country of Himalays
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-yellow-600">NEP</span>AL
          </h1>
        </div>
        {/* footer */}
        <div className="w-full grid grid-cols-2">
          {/* first side */}
          <div className="h-full w-full">
            <p className="leading-6 pl-6 md:pl-12 pb-6 md:pb-12 text-white">
              Visit Nepal, You will never regret it. <br /> This is something
              incredible, fantastic, <br /> mesmerizing and lifetime experience.{" "}
            </p>
          </div>
          {/* second side */}
          <div className="h-full w-full flex items-end justify-end">
            <div className="h-20 w-full items-center flex gap-4 flex-wrap pl-2 backdrop-blur-sm">
              {landingFooterLinks.map((link) => (
                <>
                  <li
                    key={link.id}
                    className="text-white list-none duration-200 capitalize hover:border-b-4 border-yellow-200 "
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
