"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@sryn/ui";
import { Menu, X, Users, ArrowUpRight, Plus, Search } from "lucide-react";
import { getAppUrls } from "@sryn/config/env";
import { useAuth } from "@sryn/database/context/auth-context";

export function RecruitmentHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser: user, userProfile } = useAuth();

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
        <Link href="/" className="flex items-center space-x-3 group text-left">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/50 flex items-center justify-center font-extrabold text-lg text-emerald-400 shadow-md group-hover:border-emerald-400 transition-colors">
            <Users className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-tight group-hover:text-slate-200 transition-colors">
              SRYN Recruitment
            </span>
            <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold">
              Talent & Placement Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-5 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            HOME
          </Link>
          <Link href="/jobs" className="hover:text-emerald-400 transition-colors">
            JOBS
          </Link>
          <Link href="/companies" className="hover:text-emerald-400 transition-colors">
            COMPANIES
          </Link>
          <Link href="/services" className="hover:text-emerald-400 transition-colors">
            SERVICES
          </Link>
          <Link href="/for-employers" className="hover:text-emerald-400 transition-colors">
            FOR EMPLOYERS
          </Link>
          <Link href="/careers" className="hover:text-emerald-400 transition-colors">
            CAREERS
          </Link>
          <Link href="/blog" className="hover:text-emerald-400 transition-colors">
            BLOG
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={appUrls.corporate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white flex items-center transition-colors font-medium mr-1"
          >
            SRYN Management <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>

          {user ? (
            <Link href={userProfile?.role === "EMPLOYER" ? "/employer" : userProfile?.role === "CANDIDATE" ? "/candidate" : "/recruiter"}>
              <Button variant="secondary" size="sm" className="font-semibold">
                Dashboard ({userProfile?.name || "Account"})
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/post-a-job">
                <Button variant="outline" size="sm" className="border-slate-700 text-white hover:bg-slate-800">
                  <Plus className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Post a Job
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 font-semibold shadow-lg shadow-emerald-600/20 text-white">
                  <Search className="w-3.5 h-3.5 mr-1" /> Find Jobs
                </Button>
              </Link>
            </>
          )}
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
          <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            JOBS
          </Link>
          <Link href="/companies" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            COMPANIES
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            SERVICES
          </Link>
          <Link href="/for-employers" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            FOR EMPLOYERS
          </Link>
          <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            CAREERS
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            BLOG
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            ABOUT
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">
            CONTACT
          </Link>
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link href="/jobs" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
                Find Jobs
              </Button>
            </Link>
            <Link href="/post-a-job" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="lg" className="w-full border-slate-700">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
