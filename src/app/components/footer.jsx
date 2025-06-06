"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import logo from "../assets/logo-black.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo & Description */}
        <div className="flex-1">
          <Image className="w-40 mb-4" src={logo} alt="Logo" />
          <p className="text-sm opacity-80 max-w-sm leading-relaxed">
            At Dallas Glass and Auto, we take pride in delivering expert auto and residential glass services across Texas.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/auto" className="hover:underline">Auto</Link></li>
            <li><Link href="/residential" className="hover:underline">Residential</Link></li>
            <li><Link href="/quote" className="hover:underline">Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="shrink-0" />
              <Link href="tel:9729007194" className="hover:underline">972-900-7194</Link>
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail className="shrink-0" />
              <Link href="mailto:info@dallasglassandauto.com" className="hover:underline">info@dallasglassandauto.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationArrow className="shrink-0" />
              <span>Dallas, Texas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm opacity-60">
        © {currentYear} Dallas Glass and Auto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
