import { Card, CardHeader, CardTitle, CardDescription, Badge } from "@sryn/ui";

export default function MasterAdminHomePage() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto flex flex-col space-y-8">
      <header className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SRYN Ecosystem Master Admin</h1>
          <p className="text-slate-400 text-sm mt-1">Multi-Business Role-Based Operating System</p>
        </div>
        <Badge variant="tech">Super Admin Access</Badge>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-white text-lg">Corporate Website</CardTitle>
            <CardDescription className="text-slate-400 mt-1">sryn.online</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-white text-lg">Technology Admin</CardTitle>
            <CardDescription className="text-slate-400 mt-1">technology.sryn.online</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-white text-lg">FinServ Admin</CardTitle>
            <CardDescription className="text-slate-400 mt-1">finserv.sryn.online</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-white text-lg">Recruitment Admin</CardTitle>
            <CardDescription className="text-slate-400 mt-1">recruitment.sryn.online</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
