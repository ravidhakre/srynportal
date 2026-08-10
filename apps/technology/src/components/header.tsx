"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";
import { Menu, X, ChevronDown, Laptop, ArrowUpRight } from "lucide-react";
import { getAppUrls } from "@sryn/config/env";

export function TechnologyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-sryn-navy border border-sryn-blue/50 flex items-center justify-center font-extrabold text-lg text-sryn-blue shadow-md group-hover:border-sryn-blue transition-colors">
            <Laptop className="w-5 h-5 text-sryn-blue" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight group-hover:text-slate-200 transition-colors">
              SRYN Technology
            </span>
            <span className="text-[10px] tracking-widest uppercase text-sryn-blue font-semibold">
              Software & Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <Link href="/" className="hover:text-sryn-blue transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-sryn-blue transition-colors">
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link href="/services" className="flex items-center space-x-1 hover:text-sryn-blue transition-colors py-2">
              <span>SERVICES</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-96 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div>
                  <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-sryn-blue mb-2">Development</h5>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <Link href="/services/web-development" className="block hover:text-white transition-colors">
                      Web Development
                    </Link>
                    <Link href="/services/software-development" className="block hover:text-white transition-colors">
                      Software Development
                    </Link>
                    <Link href="/services/ecommerce" className="block hover:text-white transition-colors">
                      E-Commerce Development
                    </Link>
                    <Link href="/services/mobile-app-development" className="block hover:text-white transition-colors">
                      Mobile App Development
                    </Link>
                    <Link href="/services/crm-erp" className="block hover:text-white transition-colors">
                      CRM & ERP Systems
                    </Link>
                    <Link href="/services/api-integration" className="block hover:text-white transition-colors">
                      API & Payment Integration
                    </Link>
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-sryn-red mb-2">Digital & Automation</h5>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <Link href="/services/seo" className="block hover:text-white transition-colors">
                      SEO Optimization
                    </Link>
                    <Link href="/services/google-ads" className="block hover:text-white transition-colors">
                      Google Ads Campaigns
                    </Link>
                    <Link href="/services/meta-ads" className="block hover:text-white transition-colors">
                      Meta Ads Marketing
                    </Link>
                    <Link href="/services/whatsapp-marketing" className="block hover:text-white transition-colors">
                      WhatsApp Marketing
                    </Link>
                    <Link href="/services/business-automation" className="block hover:text-white transition-colors">
                      Business Automation
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/solutions" className="hover:text-sryn-blue transition-colors">
            SOLUTIONS
          </Link>
          <Link href="/services/digital-marketing" className="hover:text-sryn-blue transition-colors">
            DIGITAL MARKETING
          </Link>
          <Link href="/portfolio" className="hover:text-sryn-blue transition-colors">
            PORTFOLIO
          </Link>
          <Link href="/pricing" className="hover:text-sryn-blue transition-colors">
            PRICING
          </Link>
          <Link href="/blog" className="hover:text-sryn-blue transition-colors">
            BLOG
          </Link>
          <Link href="/contact" className="hover:text-sryn-blue transition-colors">
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
          <Link href="/start-project">
            <Button variant="tech" size="md" className="font-semibold shadow-lg shadow-sryn-blue/20">
              Start Your Project
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
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            SERVICES
          </Link>
          <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            SOLUTIONS
          </Link>
          <Link href="/services/digital-marketing" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            DIGITAL MARKETING
          </Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            PORTFOLIO
          </Link>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            PRICING
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            BLOG
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            CONTACT
          </Link>
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link href="/start-project" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="tech" size="lg" className="w-full">
                Start Your Project
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
