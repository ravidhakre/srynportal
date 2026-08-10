import React from "react";
import { Badge, Card } from "@sryn/ui";
import { FileCode, FileText, HelpCircle, MessageSquare, Image } from "lucide-react";

export default function AdminCmsPage() {
  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          CENTRALIZED CMS
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Content Management System</h1>
        <p className="text-slate-400 text-xs mt-0.5">Manage pages, blog posts, service catalogs, FAQs, testimonials, and public media</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <FileText className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-white text-lg">Site Pages & Landing Pages</h3>
          <p className="text-xs text-slate-400">Manage corporate, technology, finserv, and recruitment page content.</p>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <FileCode className="w-6 h-6 text-sky-400" />
          <h3 className="font-bold text-white text-lg">Blog Articles</h3>
          <p className="text-xs text-slate-400">Publish articles tagged across Corporate, Tech, FinServ, and Recruitment.</p>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-white text-lg">FAQs & Help Content</h3>
          <p className="text-xs text-slate-400">Manage frequently asked questions per business vertical.</p>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <MessageSquare className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-white text-lg">Client Testimonials</h3>
          <p className="text-xs text-slate-400">Verified client testimonials and ratings.</p>
        </Card>

        <Card className="bg-slate-900 border-slate-800 p-6 space-y-3">
          <Image className="w-6 h-6 text-cyan-400" />
          <h3 className="font-bold text-white text-lg">Public Media Library</h3>
          <p className="text-xs text-slate-400">Manage public banners, icons, and blog images (Private documents excluded).</p>
        </Card>
      </div>
    </div>
  );
}
