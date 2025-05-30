"use client";
import { useState } from "react";
import logo from "../assets/logo-white.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black lg:bg-transparent w-full z-50">
      <nav className="flex max-w-7xl mx-auto justify-between items-center p-4 relative">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4">
          <li className="btn btn-ghost text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="btn btn-ghost text-white">
            <Link href="/auto">Auto</Link>
          </li>
          <li className="btn btn-ghost text-white">
            <Link href="/residential">Residential</Link>
          </li>
          <li className="btn btn-ghost text-white">
            <Link href="/tools">Tools</Link>
          </li>
          <li className="btn btn-outline text-white border-white">
            <Link href="tel:+19729007194">(972) 900-7194</Link>
          </li>
          <li className="btn uppercase btn-primary">
            <Link href="/quote">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden btn btn-ghost text-white" onClick={toggleMenu}>
          <MdOutlineMenu className="text-2xl" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute bg-black top-full left-0 w-full shadow-lg lg:hidden">
            <ul className="flex flex-col items-center justify-center p-4 gap-2">
              <li className="btn btn-ghost text-white w-full">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="btn btn-ghost text-white w-full">
                <Link href="/auto" onClick={() => setIsOpen(false)}>
                  Auto
                </Link>
              </li>
              <li className="btn btn-ghost text-white w-full">
                <Link href="/residential" onClick={() => setIsOpen(false)}>
                  Residential
                </Link>
              </li>
              <li className="btn btn-ghost text-white w-full">
                <Link href="/tools" onClick={() => setIsOpen(false)}>
                  Tools
                </Link>
              </li>
              <li className="btn btn-outline text-white border-white w-full">
                <Link href="tel:+19729007194" onClick={() => setIsOpen(false)}>
                  (972) 900-7194
                </Link>
              </li>
              <li className="btn btn-primary w-full">
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
