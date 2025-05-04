"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-xl">
      <div className="mx-auto flex items-center justify-between max-w-[1200px] px-4 py-4 lg:rounded-2xl">
        {/* Logo */}
        <Link
          href="/"
          className="block w-[100px] h-[45px] lg:w-[130px] lg:h-[60px]"
        >
          <Image
            src="/images/hrlogo.jpeg"
            alt="Revbix Logo"
            width={130}
            height={60}
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-x-8">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="#features" className="font-medium opacity-70">
            Features
          </Link>
          <Link href="#whychooseus" className="font-medium opacity-70">
            Why Choose Us?
          </Link>
          <Link href="#howitworks" className="font-medium opacity-70">
            How It Works?
          </Link>
          <Link href="#faq" className="font-medium opacity-70">
            FAQ
          </Link>
          <div className="flex gap-x-4">
            <button className="px-7 py-3 border border-[#CF2722] text-[#cf2722] rounded-xl">
              Login
            </button>
            <Link href={"#demo"}>
              <button className="px-7 py-3 bg-[#CF2722] text-white font-semibold rounded-xl cursor-pointer">
                Request A Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuIsOpen((prev) => !prev)}
          className="lg:hidden p-2 text-2xl"
        >
          {menuIsOpen ? <FaXmark /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuIsOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl lg:hidden z-50 p-4">
          <Link href="/" className="block font-medium mb-4">
            Home
          </Link>
          <Link href="#features" className="block font-medium opacity-70 mb-4">
            Features
          </Link>
          <Link
            href="#whychooseus"
            className="block font-medium opacity-70 mb-4"
          >
            Why Choose Us?
          </Link>
          <Link
            href="#howitworks"
            className="block font-medium opacity-70 mb-4"
          >
            How It Works?
          </Link>
          <Link href="#faq" className="block font-medium opacity-70 mb-6">
            FAQ
          </Link>
          <div className="flex items-center gap-x-4">
            <button className="px-7 py-3 border border-[#CF2722] text-[#cf2722] rounded-xl">
              Login
            </button>
            <Link href={"#demo"}>
              <button className="px-7 py-3 bg-[#CF2722] text-white font-semibold rounded-xl cursor-pointer">
                Request A Demo
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
