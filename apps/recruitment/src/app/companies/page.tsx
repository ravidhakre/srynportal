import React from "react";
import { Metadata } from "next";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS, type EmployerProfileDocument } from "@sryn/database";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hiring Partners & Companies | SRYN Recruitment",
  description: "Browse verified employers and hiring partners on SRYN Recruitment.",
};

async function getVerifiedEmployers(): Promise<EmployerProfileDocument[]> {
  try {
    const db = getFirebaseDb();
    const q = query(
      collection(db, COLLECTIONS.EMPLOYER_PROFILES),
      where("verificationStatus", "==", "VERIFIED")
    );
    const snap = await getDocs(q);
    const list: EmployerProfileDocument[] = [];
    snap.forEach((doc) => list.push(doc.data() as EmployerProfileDocument));
    return list;
  } catch (err) {
    console.warn("Could not fetch employers:", err);
    return [];
  }
}

export default async function CompaniesPage() {
  const employers = await getVerifiedEmployers();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-left">
      <section className="space-y-4">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          HIRING PARTNERS
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Verified Employers & Companies</h1>
      </section>

      {employers.length === 0 ? (
        <Card className="bg-slate-900 border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4 shadow-2xl">
          <Building2 className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-xl font-bold text-white">No Public Companies Listed Yet</h3>
          <p className="text-slate-400 text-sm">
            Company profiles appear here once verified by our recruitment team.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {employers.map((emp) => (
            <Card key={emp.employerId} className="bg-slate-900 border-slate-800 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">{emp.companyName}</h3>
              <p className="text-xs text-slate-400">Industry: {emp.industry}</p>
              <p className="text-xs text-slate-400">Location: {emp.location}</p>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
