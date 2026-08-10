import Link from "next/link";
import { Button, Card, Badge } from "@sryn/ui";
import {
  Laptop,
  Code,
  ShoppingBag,
  Smartphone,
  Database,
  Link as LinkIcon,
  Megaphone,
  Zap,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  Globe,
  Settings,
} from "lucide-react";

export default function TechnologyHomePage() {
  return (
    <main className="space-y-24 pb-24 text-left">
      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-sryn-blue/40 text-xs font-bold text-sryn-blue uppercase tracking-widest">
              <span>SRYN TECHNOLOGY</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[1.1]">
              Technology That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sryn-blue via-sky-400 to-indigo-400">
                Moves Your Business
              </span>{" "}
              <br />
              Forward.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              We create websites, software, digital platforms and marketing solutions that help businesses establish, automate and scale.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/start-project">
                <Button variant="tech" size="lg" className="font-semibold shadow-xl shadow-sryn-blue/20">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Code & Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sryn-blue/10 rounded-full blur-3xl" />
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">app.sryn-tech.internal</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-slate-300 my-auto bg-slate-950 p-4 rounded-xl border border-slate-800">
                <p className="text-sky-400">// SRYN Technology Stack Core</p>
                <p><span className="text-purple-400">const</span> stack = &#123; frontend: <span className="text-emerald-400">'Next.js'</span>, backend: <span className="text-emerald-400">'Node'</span> &#125;</p>
                <p><span className="text-purple-400">const</span> db = <span className="text-amber-400">'Firebase Firestore'</span>;</p>
                <p><span className="text-purple-400">async function</span> buildScalableApp() &#123;</p>
                <p className="pl-4 text-slate-400">await deployAutomationPipeline();</p>
                <p>&#125;</p>
              </div>
              <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-3 text-center">
                Engineering Digital Growth & Automation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="tech">CORE CAPABILITIES</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technology Solutions Built Around Your Business
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            From digital presence to business automation, we provide technology solutions designed around your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Web Development", desc: "Corporate sites, landing pages, responsive custom web applications.", link: "/services/web-development", icon: Laptop },
            { title: "Software Development", desc: "Management systems, custom internal tools, admin dashboards.", link: "/services/software-development", icon: Code },
            { title: "E-Commerce Development", desc: "Online stores, order tracking, product catalogs, payment systems.", link: "/services/ecommerce", icon: ShoppingBag },
            { title: "Mobile App Development", desc: "Android, iOS, cross-platform mobile business applications.", link: "/services/mobile-app-development", icon: Smartphone },
            { title: "CRM & ERP Systems", desc: "Lead pipelines, sales tracking, inventory, operations software.", link: "/services/crm-erp", icon: Database },
            { title: "API & Integration", desc: "Payment gateways, webhooks, third-party software integrations.", link: "/services/api-integration", icon: LinkIcon },
            { title: "Digital Marketing", desc: "SEO, Google Ads, Meta Ads, social media & lead generation.", link: "/services/digital-marketing", icon: Megaphone },
            { title: "Business Automation", desc: "Workflow automation, CRM triggers, WhatsApp Business API.", link: "/services/business-automation", icon: Zap },
          ].map((item, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-6 space-y-4 flex flex-col justify-between hover:border-sryn-blue/50 transition-colors group">
              <div className="space-y-3">
                <div className="p-3 w-fit rounded-xl bg-sryn-blue/10 text-sryn-blue border border-sryn-blue/20 group-hover:bg-sryn-blue group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
              <Link href={item.link} className="text-xs font-semibold text-sryn-blue flex items-center hover:underline pt-2">
                <span>Explore Service</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. BUSINESS SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <Badge variant="secondary">BUSINESS SOLUTIONS</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Tailored Solutions For Growth</h2>
            </div>
            <Link href="/solutions">
              <Button variant="outline" size="sm">
                View All Solutions
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-950 border-slate-800 p-6 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-sryn-blue/10 text-sryn-blue">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Customer & Lead CRM</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom lead capture, status pipelines, sales follow-ups, and automated notification triggers for sales teams.
              </p>
            </Card>

            <Card className="bg-slate-950 border-slate-800 p-6 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">E-Commerce Portals</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scalable storefronts with inventory sync, automated payment gateways, and WhatsApp order notifications.
              </p>
            </Card>

            <Card className="bg-slate-950 border-slate-800 p-6 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-purple-500/10 text-purple-400">
                <Settings className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Custom Admin Systems</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Internal dashboards, operational workflows, document management, and RBAC security systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. DEVELOPMENT PROCESS (7-STEP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">METHODOLOGY</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">7-Step Development Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {[
            { num: "01", title: "Discover", desc: "Understand requirements" },
            { num: "02", title: "Plan", desc: "Architecture & scope" },
            { num: "03", title: "Design", desc: "UI/UX & technical spec" },
            { num: "04", title: "Develop", desc: "Code & database build" },
            { num: "05", title: "Test", desc: "Security & performance" },
            { num: "06", title: "Launch", desc: "Production deployment" },
            { num: "07", title: "Support", desc: "Maintenance & upgrades" },
          ].map((s, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-800 p-4 space-y-2">
              <span className="text-xs font-mono font-bold text-sryn-blue">{s.num}</span>
              <h4 className="font-bold text-white text-sm">{s.title}</h4>
              <p className="text-[11px] text-slate-400">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 9. WHY SRYN TECHNOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="secondary">OUR ADVANTAGE</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Why Choose SRYN Technology?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/80 border-slate-800 p-6 space-y-3">
            <ShieldCheck className="w-6 h-6 text-sryn-blue" />
            <h3 className="font-bold text-white text-lg">Business-Focused Engineering</h3>
            <p className="text-xs text-slate-400 leading-relaxed">We build technology designed around practical business growth and operational metrics.</p>
          </Card>
          <Card className="bg-slate-900/80 border-slate-800 p-6 space-y-3">
            <Cpu className="w-6 h-6 text-sryn-red" />
            <h3 className="font-bold text-white text-lg">Modern Architecture</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Fast, secure Next.js, TypeScript, and Firebase cloud infrastructure.</p>
          </Card>
          <Card className="bg-slate-900/80 border-slate-800 p-6 space-y-3">
            <Zap className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-lg">Post-Launch Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Dedicated maintenance, technical upgrades, and support retainers.</p>
          </Card>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sryn-navy via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Move Your Business Forward?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Connect with SRYN Technology engineers to discuss your project requirements, scope, and technical roadmap.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/start-project">
              <Button variant="tech" size="lg" className="font-semibold shadow-xl shadow-sryn-blue/20">
                Start Your Project Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
