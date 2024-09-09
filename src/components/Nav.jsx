import React from "react";
import Logo from "../images/crop.png";

const Nav = () => {
  return (
    <>
      <nav className="fixed z-50 top-0 flex w-[100%] justify-between p-5 bg-white/20 backdrop-blur-md px-10">
        <div>
          {" "}
          <img src={Logo} width={40} height={10} alt="" className="flex z-40" />
        </div>
        <div className="hidden md:flex justify-around space-x-20 font-bold text-lg text-serene_blue pt-4">
          <p>Tokenomics</p>
          <p>Community</p>
          <p>How to buy</p>
        </div>
        <div className="flex justify-end w-full md:w-auto">
          <button className="border-4 px-5 py-0 border-serene_blue  text-serene_blue rounded-full hover:bg-[#ffff] interact-button">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
