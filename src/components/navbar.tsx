"use client"
import { useState } from "react";
import Link from "next/link";
import {  FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-full justify-between items-center p-4 bg-white">
      <div className="text-xl font-bold text-[#78350F]">Collers</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <img src="icons/menu.svg" />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center gap-4 font-bold absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
      >
        <div className="flex flex-col md:flex-row gap-x-4">
          <Link href="/products" className="text-[#78350F]">
            Products
          </Link>
          <Link href="/solutions" className="text-[#78350F]">
            Solutions
          </Link>
          <Link href="/pricing" className="text-[#78350F]">
            Pricing
          </Link>
          <Link href="/resources" className="text-[#78350F]">
            Resources
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <Link href="/api/auth/signin" className="text-[#78350F]">
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 rounded-lg py-2 border border-[#78350F] text-[#78350F]"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </nav>
  );
}
