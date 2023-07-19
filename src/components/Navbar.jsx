import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What Is Gpt3?</a>
    </p>
    <p>
      <a href="#possibilities">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container mx-auto px-6 py-10 flex justify-between items-center">
      <div>
        <div className="">
          <img src={logo} alt="logo" className="w-[70px] cursor-pointer" />
        </div>
      </div>
      <div className="hidden w-1/2 text-white font-primary font-[600] lg:flex flex-row justify-around">
        <Menu />
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden text-white sm:flex gap-5 font-[600]">
          <button className="outline-none">Sign in</button>
          <button className="bg-orange-600 px-5 py-2 outline-none rounded-md">
            Sign up
          </button>
        </div>
        <div className="lg:hidden relative cursor-pointer">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div>
              <div className="absolute text-white top-8 right-0 flex flex-col items-center text-center min-w-[200px] scale-up-center bg-footerColor mt-3 py-8 px-12 gap-2 font-[600] shadow-black shadow-sm">
                <Menu />
                <div className="sm:hidden text-white flex flex-col gap-2 font-[600]">
                  <p>Sign in</p>
                  <button className="bg-orange-600 px-5 py-2 outline-none">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
