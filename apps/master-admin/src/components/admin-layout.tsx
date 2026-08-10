"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@sryn/database/context/auth-context";
import { SystemRole } from "@sryn/auth";
import { BusinessSwitcher, type SelectedVerticalFilter } from "./business-switcher";
import {
  LayoutDashboard,
  Cpu,
  Landmark,
  Users,
  UserCheck,
  Briefcase,
  FileCode,
  PieChart,
  Bell,
  ShieldCheck,
  Settings,
  Search,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Building2,
  FolderKanban,
  FileCheck,
  HelpCircle,
  Sliders,
  MessageSquare,
  FileText,
  CreditCard,
  Clock,
  Activity,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.FC<{ className?: string }>;
  vertical?: string;
  superOnly?: boolean;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userProfile, role, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const [selectedVertical, setSelectedVertical] = useState<SelectedVerticalFilter>("ALL");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const isSuper = role === SystemRole.SUPER_ADMIN;

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const navGroups: NavGroup[] = [
    {
      title: "OVERVIEW",
      items: [
        { label: "Master Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { label: "System Health", href: "/admin/system-health", icon: Activity },
      ],
    },
    {
      title: "BUSINESS VERTICALS",
      items: [
        { label: "Technology Portal", href: "/admin/technology", icon: Cpu, vertical: "TECHNOLOGY" },
        { label: "FinServ Portal", href: "/admin/finserv", icon: Landmark, vertical: "FINSERV" },
        { label: "Recruitment Portal", href: "/admin/recruitment", icon: Users, vertical: "RECRUITMENT" },
      ],
    },
    {
      title: "OPERATIONS & CRM",
      items: [
        { label: "User Directory", href: "/admin/users", icon: UserCheck },
        { label: "Tech Projects", href: "/admin/technology/projects", icon: FolderKanban, vertical: "TECHNOLOGY" },
        { label: "Finance Applications", href: "/admin/finserv/applications", icon: FileCheck, vertical: "FINSERV" },
        { label: "Job Requisitions", href: "/admin/recruitment/jobs", icon: Briefcase, vertical: "RECRUITMENT" },
        { label: "Contact Enquiries", href: "/admin/contact-submissions", icon: HelpCircle },
        { label: "Client Invoices", href: "/admin/invoices", icon: FileText },
        { label: "Payment Gateway", href: "/admin/payments", icon: CreditCard },
      ],
    },
    {
      title: "AUTOMATION & WORKFLOWS",
      items: [
        { label: "Workflow Automations", href: "/admin/automations", icon: Sliders },
        { label: "Communications Inbox", href: "/admin/communications", icon: MessageSquare },
        { label: "Scheduled Jobs", href: "/admin/scheduled-jobs", icon: Clock },
      ],
    },
    {
      title: "CONTENT & SYSTEM",
      items: [
        { label: "CMS Center", href: "/admin/cms", icon: FileCode },
        { label: "Analytics & Reports", href: "/admin/analytics", icon: PieChart },
        { label: "Roles & Permissions", href: "/admin/roles", icon: ShieldCheck, superOnly: true },
        { label: "Audit Logs", href: "/admin/audit-logs", icon: ShieldCheck, superOnly: true },
        { label: "System Settings", href: "/admin/settings", icon: Settings },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* TOPBAR */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/admin/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-sm">
              S
            </div>
            <span className="font-extrabold text-white text-base tracking-tight hidden sm:inline">
              SRYN Master Admin
            </span>
          </Link>
        </div>

        {/* Center: Business Switcher & Search */}
        <div className="hidden md:flex items-center space-x-4">
          {isSuper && (
            <BusinessSwitcher
              selectedVertical={selectedVertical}
              onSelectVertical={setSelectedVertical}
            />
          )}

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-xs hover:border-slate-700 transition-colors w-48 sm:w-64 justify-between"
          >
            <span className="flex items-center space-x-1.5">
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search Admin...</span>
            </span>
            <kbd className="font-mono text-[10px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-slate-500">⌘K</kbd>
          </button>
        </div>

        {/* Right: Notifications & User Profile */}
        <div className="flex items-center space-x-3">
          <Link href="/admin/notifications">
            <button className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
            </button>
          </Link>

          <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-xs font-bold text-white">{userProfile?.name || "Admin Account"}</span>
              <span className="text-[10px] text-emerald-400 font-mono font-medium">{role}</span>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sryn-red transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR */}
        <aside
          className={`w-64 border-r border-slate-800 bg-slate-900/60 p-4 space-y-6 flex flex-col justify-between shrink-0 transition-all duration-200 z-30 ${
            mobileSidebarOpen ? "block absolute inset-y-0 left-0 bg-slate-950 shadow-2xl pt-20" : "hidden lg:flex"
          }`}
        >
          <div className="space-y-6 overflow-y-auto">
            {navGroups.map((group, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase px-3 block">
                  {group.title}
                </span>
                <div className="space-y-0.5 pt-1">
                  {group.items.map((item, itemIdx) => {
                    if (item.superOnly && !isSuper) return null;
                    if (
                      item.vertical &&
                      selectedVertical !== "ALL" &&
                      selectedVertical !== item.vertical
                    ) {
                      return null;
                    }

                    const Icon = item.icon;
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                    return (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={() => setMobileSidebarOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                        }`}
                      >
                        <span className="flex items-center space-x-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                          <span>{item.label}</span>
                        </span>
                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              SRYN Management
            </div>
            <p className="text-[10px]">Centralized Control Panel v9.0</p>
          </div>
        </aside>

        {/* MAIN CONTENT WORKSPACE */}
        <div className="flex-1 overflow-y-auto bg-slate-950 p-6 sm:p-8">
          {children}
        </div>
      </div>

      {/* GLOBAL SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-4 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2 text-slate-300 text-sm">
                <Search className="w-4 h-4 text-emerald-400" />
                <span>Global Admin Search</span>
              </div>
              <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users, leads, jobs, applications, projects, quotes, invoices, payments..."
              className="w-full h-11 px-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              autoFocus
            />
            <div className="text-xs text-slate-500 text-center py-4">
              {searchQuery ? `Searching across authorized collections for "${searchQuery}"...` : "Type keywords to search across system entities."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
