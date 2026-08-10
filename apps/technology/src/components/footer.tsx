import Link from "next/link";
import { getAppUrls } from "@sryn/config/env";
import { Laptop } from "lucide-react";

export function TechnologyFooter() {
  const appUrls = getAppUrls();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sryn-navy border border-sryn-blue/50 flex items-center justify-center font-extrabold text-lg text-sryn-blue">
                <Laptop className="w-5 h-5 text-sryn-blue" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">SRYN Technology</span>
                <span className="text-[10px] tracking-widest uppercase text-sryn-blue font-semibold">
                  Software & Digital Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We create websites, software, digital platforms and marketing solutions that help businesses establish, automate and scale their digital presence.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              A business vertical of <span className="text-slate-300 font-semibold">SRYN Management Pvt. Ltd.</span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-white transition-colors">
                  E-Commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/crm-erp" className="hover:text-white transition-colors">
                  CRM & ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Technology Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/start-project" className="text-sryn-blue font-semibold hover:underline">
                  Start Your Project →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SRYN Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">SRYN Network</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={appUrls.corporate} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                  SRYN Management ↗
                </a>
              </li>
              <li>
                <a href={appUrls.finserv} target="_blank" rel="noopener noreferrer" className="hover:text-sryn-red flex items-center">
                  SRYN FinServ ↗
                </a>
              </li>
              <li>
                <a href={appUrls.recruitment} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center">
                  SRYN Recruitment ↗
                </a>
              </li>
              <li className="pt-2 border-t border-slate-900">
                <Link href="/privacy-policy" className="hover:text-white text-xs block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white text-xs block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SRYN Technology. All Rights Reserved.</p>
          <p className="text-center md:text-right">
            Technology That Moves Your Business Forward.
          </p>
        </div>
      </div>
    </footer>
  );
}
