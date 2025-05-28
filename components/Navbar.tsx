"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CabalLogo from "@/assets/images/main-logo-th.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto ">
        <div className="flex items-center justify-between h-fit">
          {/* Logo and site name */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src={CabalLogo}
                alt="CABAL Logo"
                className="w-full"
                width={200}
                height={100}
              />
            </Link>

            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                <NavLink href="#" label="หน้าแรก" />
                <NavLink href="#" label="ข้อมูลเกม" />
                <NavLink href="#" label="สื่อ" />
                <NavLink href="#" label="อีสปอร์ต" />
                <NavLink href="#" label="ข่าวสาร" />
                <NavLink href="#" label="คอมมูนิตี้" />
                <NavLink href="#" label="เติมเงิน" />
              </div>
            </div>
          </div>

          <div className="flex items-center h-fit">
            <button className="bg-gradient-to-r h-full from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-cyan-700 transition-colors duration-300">
              สมัครสมาชิก
            </button>
          </div>

          {/* Desktop menu */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-sm">
          <MobileNavLink href="/" label="Home" />
          <MobileNavLink href="/features" label="Features" />
          <MobileNavLink href="/about" label="About" />
          <MobileNavLink href="/contact" label="Contact" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider hover:border-b-2 hover:border-purple-500 py-1"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
    >
      {label}
    </Link>
  );
};

export default Navbar;
