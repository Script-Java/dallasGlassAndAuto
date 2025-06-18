"use client";
import Link from "next/link";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-10 bg-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 px-4">
        {/* Quick Links */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/" className="hover:underline hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/auto" className="hover:underline hover:text-primary">
                Auto Glass
              </Link>
            </li>

            <li>
              <Link
                href="/residential"
                className="hover:underline hover:text-primary"
              >
                Residential Glass
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-primary">
                Tips & Tricks
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="hover:underline hover:text-primary"
              >
                Online Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white my-4"></div>

        {/* Contact Info */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 justify-center">
              <FaPhone className="shrink-0" />
              <Link
                href="tel:9729007194"
                className="hover:underline hover:text-primary"
              >
                972-900-7194
              </Link>
            </span>
            <span className="flex items-center gap-2 justify-center">
              <IoIosMail className="shrink-0" />
              <Link
                href="mailto:info@dallasglassandauto.com"
                className="hover:underline hover:text-primary"
              >
                info@dallasglassandauto.com
              </Link>
            </span>
            <span className="flex items-center gap-2 justify-center">
              <FaLocationArrow className="shrink-0" />
              Dallas, Texas
            </span>
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
