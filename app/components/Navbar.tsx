"use client";
import Image from "next/image";
import logo from "@/public/logo/Container.png";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "how-it-works", "sports", "subscribe"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (section: string, isMobile = false) => {
    const isActive = activeSection === section;
    const baseClass = "transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#0F744F] after:transition-all after:duration-300 hover:after:w-full pb-1";
    
    if (isActive) {
      return `${baseClass} text-[#0F744F] after:!w-full`;
    }
    return `${baseClass} ${isMobile ? "text-gray-700" : "text-black"} hover:text-[#0F744F]`;
  };

  return (
    <nav className="bg-linear-to-r from-[#F2DED5] via-[#F9F9F9] to-[#D5E3E3] backdrop-blur-xs py-1 md:py-3 fixed top-0 left-0 right-0 z-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 -ml-2">
            <Link href="/" className="flex justify-center items-center" >
              <Image
                src={logo}
                alt="Mait Club"
                width={70}
                height={70}
                className="mt-3"
              />
            </Link>
            <p className="font-bold text-4xl">
              <span className="text-[#0F744F]">Mait</span> Club
            </p>
          </div>

          <div className="h-10 w-px bg-black hidden md:block">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className={getLinkClass("home")}>
              Home
            </Link>
            <Link href="#how-it-works" className={getLinkClass("how-it-works")}>
              How it works
            </Link>
            <Link href="#sports" className={getLinkClass("sports")}>
              Sports Support
            </Link>
            <Link onClick={() => setIsOpen(false)} href="#subscribe" className="bg-[#0F744F] text-white px-6 py-2 rounded-[10px] font-medium hover:bg-[#0a5a3d] transition-colors md:hidden">
             Join the Waitlist
            </Link>
          </div>


          <Link onClick={() => setIsOpen(false)} href="#subscribe" className="bg-[#0F744F] text-white px-6 py-2 rounded-[10px] font-medium hover:bg-[#0a5a3d] transition-colors hidden md:block">
         Join the Waitlist
          </Link>


          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link onClick={() => setIsOpen(false)} href="#home" className={getLinkClass("home", true)}>
                Home
              </Link>
              <Link onClick={() => setIsOpen(false)} href="#how-it-works" className={getLinkClass("how-it-works", true)}>
                How it works
              </Link>
              <Link onClick={() => setIsOpen(false)} href="#sports" className={getLinkClass("sports", true)}>
                Sports Support
              </Link>
              <Link onClick={() => setIsOpen(false)} href="#subscribe" className="bg-[#0F744F] text-white px-6 py-2 rounded-[10px] font-medium hover:bg-[#0a5a3d] transition-colors w-fit">
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
