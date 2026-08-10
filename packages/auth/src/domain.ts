import { BusinessVertical } from "./roles";

export type DomainContextType = "CORPORATE" | "TECHNOLOGY" | "FINSERV" | "RECRUITMENT" | "ADMIN";

export interface DomainInfo {
  context: DomainContextType;
  businessVertical: BusinessVertical;
  domainName: string;
}

export function detectDomainContext(hostname?: string, port?: string): DomainInfo {
  const currentHost = hostname || (typeof window !== "undefined" ? window.location.hostname : "");
  const currentPort = port || (typeof window !== "undefined" ? window.location.port : "");

  // Local development port mapping
  if (currentPort === "3000") return { context: "CORPORATE", businessVertical: BusinessVertical.CORPORATE, domainName: "sryn.online" };
  if (currentPort === "3001") return { context: "TECHNOLOGY", businessVertical: BusinessVertical.TECHNOLOGY, domainName: "technology.sryn.online" };
  if (currentPort === "3002") return { context: "FINSERV", businessVertical: BusinessVertical.FINSERV, domainName: "finserv.sryn.online" };
  if (currentPort === "3003") return { context: "RECRUITMENT", businessVertical: BusinessVertical.RECRUITMENT, domainName: "recruitment.sryn.online" };
  if (currentPort === "3004") return { context: "ADMIN", businessVertical: BusinessVertical.CORPORATE, domainName: "admin.sryn.online" };

  // Subdomain production hostname mapping
  if (currentHost.startsWith("technology.")) return { context: "TECHNOLOGY", businessVertical: BusinessVertical.TECHNOLOGY, domainName: "technology.sryn.online" };
  if (currentHost.startsWith("finserv.")) return { context: "FINSERV", businessVertical: BusinessVertical.FINSERV, domainName: "finserv.sryn.online" };
  if (currentHost.startsWith("recruitment.")) return { context: "RECRUITMENT", businessVertical: BusinessVertical.RECRUITMENT, domainName: "recruitment.sryn.online" };
  if (currentHost.startsWith("admin.")) return { context: "ADMIN", businessVertical: BusinessVertical.CORPORATE, domainName: "admin.sryn.online" };

  // Default corporate
  return { context: "CORPORATE", businessVertical: BusinessVertical.CORPORATE, domainName: "sryn.online" };
}
