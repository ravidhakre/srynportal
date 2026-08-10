import Link from "next/link";
import { getAppUrls } from "@sryn/config/env";
import { Laptop, Landmark, Users, ArrowUpRight } from "lucide-react";

export function CorporateFooter() {
  const appUrls = getAppUrls();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sryn-navy border border-sryn-red/50 flex items-center justify-center font-extrabold text-lg text-white">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">SRYN Management</span>
                <span className="text-[10px] tracking-widest uppercase text-sryn-red font-semibold">Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              SRYN Management Pvt. Ltd. is a diversified organization operating across Technology, Financial Services and
              Recruitment, delivering practical solutions for businesses, individuals and professionals.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Official Production Domain: <span className="text-slate-300 font-mono">www.sryn.online</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About SRYN
                </Link>
              </li>
              <li>
                <Link href="/businesses" className="hover:text-white transition-colors">
                  Business Verticals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Business Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={appUrls.technology}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sryn-blue hover:underline group"
                >
                  <Laptop className="w-4 h-4 mr-1.5" />
                  <span>SRYN Technology</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={appUrls.finserv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sryn-red hover:underline group"
                >
                  <Landmark className="w-4 h-4 mr-1.5" />
                  <span>SRYN FinServ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={appUrls.recruitment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-400 hover:underline group"
                >
                  <Users className="w-4 h-4 mr-1.5" />
                  <span>SRYN Recruitment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={appUrls.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center"
                >
                  Master Admin Portal ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Financial Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SRYN Management Pvt. Ltd. All Rights Reserved.</p>
          <p className="text-center md:text-right">
            Building Businesses. Enabling Growth. Creating Opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
