"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";
import { Menu, X, ChevronDown, Landmark, ArrowUpRight } from "lucide-react";
import { getAppUrls } from "@sryn/config/env";

export function FinServHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [creditDropdownOpen, setCreditDropdownOpen] = useState(false);

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
        scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-sryn-red/50 flex items-center justify-center font-extrabold text-lg text-sryn-red shadow-md group-hover:border-sryn-red transition-colors">
            <Landmark className="w-5 h-5 text-sryn-red" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg text-white tracking-tight group-hover:text-slate-200 transition-colors">
              SRYN FinServ
            </span>
            <span className="text-[10px] tracking-widest uppercase text-sryn-red font-semibold">
              Financial Assistance & Credit Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <Link href="/" className="hover:text-sryn-red transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-sryn-red transition-colors">
            ABOUT
          </Link>

          {/* LOANS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoansDropdownOpen(true)}
            onMouseLeave={() => setLoansDropdownOpen(false)}
          >
            <Link href="/loans" className="flex items-center space-x-1 hover:text-sryn-red transition-colors py-2">
              <span>LOANS</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {loansDropdownOpen && (
              <div className="absolute top-full left-0 w-64 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-sryn-red mb-1">Financing Options</h5>
                <Link href="/loans/personal-loan" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Personal Loan Assistance
                </Link>
                <Link href="/loans/business-loan" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Business Loan Assistance
                </Link>
                <Link href="/loans/home-loan" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Home Loan Assistance
                </Link>
                <Link href="/loans/loan-against-property" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Loan Against Property (LAP)
                </Link>
              </div>
            )}
          </div>

          {/* CREDIT SERVICES Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCreditDropdownOpen(true)}
            onMouseLeave={() => setCreditDropdownOpen(false)}
          >
            <Link href="/credit" className="flex items-center space-x-1 hover:text-sryn-red transition-colors py-2">
              <span>CREDIT SERVICES</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {creditDropdownOpen && (
              <div className="absolute top-full left-0 w-64 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-sryn-red mb-1">Credit Guidance</h5>
                <Link href="/credit/consultation" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Credit Consultation
                </Link>
                <Link href="/credit/guidance" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Credit Profile Guidance
                </Link>
                <Link href="/credit/cards" className="block text-xs text-slate-300 hover:text-white py-1 transition-colors">
                  Credit Card Assistance
                </Link>
              </div>
            )}
          </div>

          <Link href="/financial-solutions" className="hover:text-sryn-red transition-colors">
            SOLUTIONS
          </Link>
          <Link href="/eligibility" className="hover:text-sryn-red transition-colors">
            ELIGIBILITY
          </Link>
          <Link href="/documents" className="hover:text-sryn-red transition-colors">
            DOCUMENTS
          </Link>
          <Link href="/faq" className="hover:text-sryn-red transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="hover:text-sryn-red transition-colors">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-sryn-red transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={appUrls.corporate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white flex items-center transition-colors font-medium"
          >
            SRYN Management <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
          <Link href="/apply">
            <Button variant="danger" size="md" className="font-semibold shadow-lg shadow-sryn-red/20">
              Check Your Requirement
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 text-left">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            HOME
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            ABOUT
          </Link>
          <Link href="/loans" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            LOANS
          </Link>
          <Link href="/credit" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            CREDIT SERVICES
          </Link>
          <Link href="/financial-solutions" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            SOLUTIONS
          </Link>
          <Link href="/eligibility" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            ELIGIBILITY
          </Link>
          <Link href="/documents" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            DOCUMENTS
          </Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            FAQ
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            CONTACT
          </Link>
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="danger" size="lg" className="w-full">
                Check Your Requirement
              </Button>
            </Link>
            <a href={appUrls.corporate} target="_blank" rel="noopener noreferrer" className="block text-xs text-center text-slate-400">
              SRYN Management Main Site ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
