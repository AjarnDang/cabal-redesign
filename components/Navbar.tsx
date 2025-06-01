"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CabalLogo from "../public/assets/images/main-logo-th.webp";
import { ChevronDown, User, Globe } from "lucide-react";
import ButtonGlobal from "./ButtonGlobal";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileGameMenuOpen, setMobileGameMenuOpen] = useState(false);
  const [mobileCommunityMenuOpen, setMobileCommunityMenuOpen] = useState(false);

  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const gameMenuButtonRef = useRef<HTMLButtonElement>(null);
  const communityMenuButtonRef = useRef<HTMLButtonElement>(null);

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

  // Update ARIA attributes
  useEffect(() => {
    if (mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.setAttribute(
        "aria-expanded",
        isMobileMenuOpen ? "true" : "false"
      );
    }
    if (gameMenuButtonRef.current) {
      gameMenuButtonRef.current.setAttribute(
        "aria-expanded",
        mobileGameMenuOpen ? "true" : "false"
      );
    }
    if (communityMenuButtonRef.current) {
      communityMenuButtonRef.current.setAttribute(
        "aria-expanded",
        mobileCommunityMenuOpen ? "true" : "false"
      );
    }
  }, [isMobileMenuOpen, mobileGameMenuOpen, mobileCommunityMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-100 transition-all duration-300",
        isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo and site name */}
          <div className="flex items-center gap-8 py-2">
            <Link href="/" className="flex items-center group">
              <Image
                src={CabalLogo}
                alt="CABAL Logo"
                className="h-16 w-auto object-contain"
                width={0}
                height={0}
              />
            </Link>

            <div className="hidden lg:block">
              <div className="flex items-center gap-6">
                <NavLink href="#" label="หน้าแรก" active />

                {/* ข้อมูลเกม Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-1 py-1.5 text-sm font-medium transition-colors",
                        "text-muted-foreground hover:text-foreground outline-none focus:outline-none"
                      )}
                      aria-label="เมนูข้อมูลเกม"
                    >
                      ข้อมูลเกม{" "}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-48 bg-card/95 backdrop-blur-md border-border/40 z-100"
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/game/classes" className="cursor-pointer">
                        โลก CABAL
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/game/classes" className="cursor-pointer">
                        ตัวละคร
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/game/world" className="cursor-pointer">
                        ระบบเกม
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavLink href="#" label="สื่อ" />
                <NavLink href="#" label="อีสปอร์ต" />
                <NavLink href="#" label="ข่าวสาร" />

                {/* คอมมูนิตี้ Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-1 py-1.5 text-sm font-medium transition-colors",
                        "text-muted-foreground hover:text-foreground outline-none focus:outline-none"
                      )}
                      aria-label="เมนูคอมมูนิตี้"
                    >
                      คอมมูนิตี้{" "}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-48 bg-card/95 backdrop-blur-md border-border/40 z-100"
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/community/forum" className="cursor-pointer">
                        Facebook Page
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/community/facebook"
                        className="cursor-pointer"
                      >
                        Facebook Community
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/community/discord"
                        className="cursor-pointer"
                      >
                        Discord
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <NavLink href="#" label="เติมเงิน" />
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-stretch h-full">
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "inline-flex items-center justify-center rounded-md",
                  "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  "transition-colors duration-200"
                )}
                aria-expanded="false"
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen && (
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
                )}
              </button>
            </div>

            {/* Login Icon */}
            <Link
              href="#"
              className={cn(
                "relative hidden lg:inline-flex items-center justify-center text-sm font-medium transition-all",
                "text-muted-foreground hover:text-foreground",
                "group"
              )}
              title="เข้าสู่ระบบ"
            >
              <User size={20} />
            </Link>

            {/* Go to SEA Icon */}
            <Link
              href="#"
              className={cn(
                "relative hidden lg:inline-flex items-center justify-center text-sm font-medium transition-all",
                "text-muted-foreground hover:text-foreground",
                "group"
              )}
              title="ไปยังเซิร์ฟเวอร์ SEA"
            >
              <Globe size={20} />
            </Link>

            <ButtonGlobal
              href="#"
              variant="primary"
              size="md"
              className="lg:min-w-32 min-w-20 scratch-effect"
            >
              เล่นฟรี
            </ButtonGlobal>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all fixed top-0 left-0 w-full h-screen duration-300 ease-in-out z-[100]",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0 pointer-events-none"
        )}
      >
        <div className="px-4 py-3 space-y-1 bg-card/95 backdrop-blur-md h-screen border-t border-border/20">
          <div className="flex w-full justify-end mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
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
            </button>
          </div>
          <MobileNavLink href="#" label="หน้าแรก" active />

          {/* ข้อมูลเกม Dropdown - Mobile */}
          <div className="px-3 py-2">
            <button
              ref={gameMenuButtonRef}
              onClick={() => setMobileGameMenuOpen(!mobileGameMenuOpen)}
              className="flex justify-between items-center w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded="false"
              aria-label="Toggle game info menu"
            >
              ข้อมูลเกม
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  mobileGameMenuOpen ? "rotate-180" : ""
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 space-y-1 border-l border-border/40 overflow-hidden transition-all duration-300",
                mobileGameMenuOpen ? "max-h-40 mt-2" : "max-h-0"
              )}
            >
              <MobileSubLink href="#" label="โลก CABAL" />
              <MobileSubLink href="#" label="ตัวละคร" />
              <MobileSubLink href="#" label="ระบบเกม" />
            </div>
          </div>

          <MobileNavLink href="#" label="สื่อ" />
          <MobileNavLink href="#" label="อีสปอร์ต" />
          <MobileNavLink href="#" label="ข่าวสาร" />

          {/* คอมมูนิตี้ Dropdown - Mobile */}
          <div className="px-3 py-2">
            <button
              ref={communityMenuButtonRef}
              onClick={() =>
                setMobileCommunityMenuOpen(!mobileCommunityMenuOpen)
              }
              className="flex justify-between items-center w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded="false"
              aria-label="Toggle community menu"
            >
              คอมมูนิตี้
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  mobileCommunityMenuOpen ? "rotate-180" : ""
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 space-y-1 border-l border-border/40 overflow-hidden transition-all duration-300",
                mobileCommunityMenuOpen ? "max-h-40 mt-2" : "max-h-0"
              )}
            >
              <MobileSubLink href="#" label="Facebook Page" />
              <MobileSubLink href="#" label="Facebook Community" />
              <MobileSubLink href="#" label="Discord" />
            </div>
          </div>

          <MobileNavLink href="#" label="เติมเงิน" />

          {/* Login and SEA in Mobile Menu */}
          <div className="mt-4 pt-4 border-t border-border/20">
            <MobileNavLink href="#" label="เข้าสู่ระบบ" />
            <MobileNavLink href="#" label="เซิร์ฟเวอร์ SEA" />
          </div>

          {/* Play Now Button in Mobile Menu */}
          <div className="mt-4 px-3">
            <ButtonGlobal
              href="#"
              variant="primary"
              size="md"
              fullWidth
              className="scratch-effect py-3"
            >
              เล่นฟรี
            </ButtonGlobal>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const NavLink = ({ href, label, active }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-1 py-1.5 text-sm font-medium transition-colors",
        "hover:text-foreground",
        active
          ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
          : "text-muted-foreground hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-0.5 hover:after:w-full hover:after:bg-primary/70 hover:after:transition-all"
      )}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const MobileNavLink = ({ href, label, active }: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "block px-3 py-2 rounded-md text-base font-medium transition-colors",
        active
          ? "bg-primary/10 text-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
      )}
    >
      {label}
    </Link>
  );
};

const MobileSubLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  );
};

export default Navbar;
