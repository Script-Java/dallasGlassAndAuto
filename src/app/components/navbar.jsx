"use client";
import { useState } from "react";
import logo from "../assets/logo-white.png";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black w-full z-50 sticky top-0">
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
        <button className="lg:hidden btn btn-ghost text-white z-50" onClick={toggleMenu}>
          {isOpen ? <IoMdClose className="text-2xl" /> : <MdOutlineMenu className="text-2xl" />}
        </button>

        {/* Mobile Menu Fullscreen */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col justify-center items-center p-6">
            <ul className="flex flex-col gap-6 items-center w-full">
              {[ 
                { label: "Home", href: "/" },
                { label: "Auto", href: "/auto" },
                { label: "Residential", href: "/residential" },
                { label: "Tools", href: "/tools" },
                { label: "(972) 900-7194", href: "tel:+19729007194", className: "btn-outline text-white border-white" },
                { label: "Free Quote", href: "/quote", className: "btn-primary" },
              ].map(({ label, href, className = "btn-ghost text-white" }, i) => (
                <li key={i} className={`btn w-full text-center ${className}`}>
                  <Link href={href} onClick={() => setIsOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
