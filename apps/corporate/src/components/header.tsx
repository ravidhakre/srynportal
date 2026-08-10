"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";
import { Menu, X, ChevronDown, ExternalLink, Laptop, Landmark, Users } from "lucide-react";
import { getAppUrls } from "@sryn/config/env";

export function CorporateHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesDropdownOpen, setBusinessesDropdownOpen] = useState(false);

  const appUrls = getAppUrls();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-sryn-navy border border-sryn-red/50 flex items-center justify-center font-extrabold text-lg text-white shadow-md group-hover:border-sryn-red transition-colors">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight group-hover:text-slate-200 transition-colors">
              SRYN Management
            </span>
            <span className="text-[10px] tracking-widest uppercase text-sryn-red font-semibold">Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            ABOUT
          </Link>

          {/* Businesses Mega-Menu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBusinessesDropdownOpen(true)}
            onMouseLeave={() => setBusinessesDropdownOpen(false)}
          >
            <Link
              href="/businesses"
              className="flex items-center space-x-1 hover:text-white transition-colors py-2"
            >
              <span>BUSINESSES</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </Link>

            {businessesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-3 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href={appUrls.technology}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800 transition-colors group/item"
                >
                  <div className="p-2 rounded-lg bg-sryn-blue/10 border border-sryn-blue/20 text-sryn-blue group-hover/item:bg-sryn-blue group-hover/item:text-white transition-colors">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm flex items-center gap-1">
                      SRYN Technology <ExternalLink className="w-3 h-3 text-slate-500" />
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Digital, software & web solutions</p>
                  </div>
                </a>

                <a
                  href={appUrls.finserv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800 transition-colors group/item"
                >
                  <div className="p-2 rounded-lg bg-sryn-red/10 border border-sryn-red/20 text-sryn-red group-hover/item:bg-sryn-red group-hover/item:text-white transition-colors">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm flex items-center gap-1">
                      SRYN FinServ <ExternalLink className="w-3 h-3 text-slate-500" />
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Loan assistance & credit solutions</p>
                  </div>
                </a>

                <a
                  href={appUrls.recruitment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800 transition-colors group/item"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm flex items-center gap-1">
                      SRYN Recruitment <ExternalLink className="w-3 h-3 text-slate-500" />
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">IT & Non-IT staffing portal</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-white transition-colors">
            SERVICES
          </Link>
          <Link href="/careers" className="hover:text-white transition-colors">
            CAREERS
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <Button variant="danger" size="md" className="font-semibold shadow-lg shadow-sryn-red/20">
              TALK TO US
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-200 hover:text-white"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-200 hover:text-white"
          >
            ABOUT
          </Link>
          <Link
            href="/businesses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-200 hover:text-white"
          >
            BUSINESSES
          </Link>
          <div className="pl-4 space-y-2 text-sm text-slate-400 border-l border-slate-800">
            <a href={appUrls.technology} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              SRYN Technology ↗
            </a>
            <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              SRYN FinServ ↗
            </a>
            <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              SRYN Recruitment ↗
            </a>
          </div>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-200 hover:text-white"
          >
            SERVICES
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-200 hover:text-white"
          >
            CAREERS
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-200 hover:text-white"
          >
            CONTACT
          </Link>
          <div className="pt-4 border-t border-slate-800">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="danger" size="lg" className="w-full">
                TALK TO US
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
