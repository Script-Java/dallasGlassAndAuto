"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-10 bg-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Contact Info */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center gap-3">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col sm:flex-row sm:gap-6 text-sm">
              <span className="flex items-center gap-2">
                <FaPhone className="shrink-0" />
                <Link href="tel:9729007194" className="hover:underline">972-900-7194</Link>
              </span>
              <span className="flex items-center gap-2">
                <IoIosMail className="shrink-0" />
                <Link href="mailto:info@dallasglassandauto.com" className="hover:underline">info@dallasglassandauto.com</Link>
              </span>
              <span className="flex items-center gap-2">
                <FaLocationArrow className="shrink-0" />
                Dallas, Texas
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white my-4"></div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center gap-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/auto" className="hover:underline">Auto Glass</Link></li>
              <li><Link href="/residential" className="hover:underline">Residential Glass</Link></li>
              <li><Link href="/quote" className="hover:underline">Online Quote</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-4 text-center text-sm mt-6">
        © {currentYear} Dallas Glass and Auto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
