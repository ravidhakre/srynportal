export enum SystemRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  BUSINESS_ADMIN = "BUSINESS_ADMIN",
  MANAGER = "MANAGER",
  TEAM_LEADER = "TEAM_LEADER",
  EXECUTIVE = "EXECUTIVE",
  RECRUITER = "RECRUITER",
  SALES_EXECUTIVE = "SALES_EXECUTIVE",
  CONTENT_MANAGER = "CONTENT_MANAGER",
  CANDIDATE = "CANDIDATE",
  EMPLOYER = "EMPLOYER",
  CUSTOMER = "CUSTOMER",
}

export enum BusinessVertical {
  CORPORATE = "CORPORATE",
  TECHNOLOGY = "TECHNOLOGY",
  FINSERV = "FINSERV",
  RECRUITMENT = "RECRUITMENT",
}

export enum PermissionCode {
  // User Management
  USERS_VIEW = "users.view",
  USERS_CREATE = "users.create",
  USERS_UPDATE = "users.update",
  USERS_DELETE = "users.delete",
  USERS_MANAGE_ROLES = "users.manage_roles",

  // Leads & CRM
  LEADS_VIEW = "leads.view",
  LEADS_CREATE = "leads.create",
  LEADS_UPDATE = "leads.update",
  LEADS_ASSIGN = "leads.assign",
  LEADS_DELETE = "leads.delete",

  // Projects & Tech
  PROJECTS_VIEW = "projects.view",
  PROJECTS_CREATE = "projects.create",
  PROJECTS_UPDATE = "projects.update",
  PROJECTS_DELETE = "projects.delete",

  // Finance
  FINANCE_VIEW = "finance.view",
  FINANCE_CREATE = "finance.create",
  FINANCE_UPDATE = "finance.update",
  FINANCE_DOCUMENTS_VIEW = "finance.documents.view",

  // Jobs & Recruitment
  JOBS_VIEW = "jobs.view",
  JOBS_CREATE = "jobs.create",
  JOBS_UPDATE = "jobs.update",
  JOBS_PUBLISH = "jobs.publish",
  JOBS_DELETE = "jobs.delete",

  CANDIDATES_VIEW = "candidates.view",
  CANDIDATES_CREATE = "candidates.create",
  CANDIDATES_UPDATE = "candidates.update",

  EMPLOYERS_VIEW = "employers.view",
  EMPLOYERS_CREATE = "employers.create",
  EMPLOYERS_UPDATE = "employers.update",

  // System & Content
  REPORTS_VIEW = "reports.view",
  ANALYTICS_VIEW = "analytics.view",
  CONTENT_MANAGE = "content.manage",
  SETTINGS_MANAGE = "settings.manage",
  AUDIT_LOGS_VIEW = "audit_logs.view",
}

export const ROLE_PERMISSIONS: Record<SystemRole, PermissionCode[]> = {
  [SystemRole.SUPER_ADMIN]: Object.values(PermissionCode),
  [SystemRole.BUSINESS_ADMIN]: [
    PermissionCode.USERS_VIEW, PermissionCode.USERS_CREATE, PermissionCode.USERS_UPDATE,
    PermissionCode.LEADS_VIEW, PermissionCode.LEADS_CREATE, PermissionCode.LEADS_UPDATE, PermissionCode.LEADS_ASSIGN,
    PermissionCode.PROJECTS_VIEW, PermissionCode.PROJECTS_CREATE, PermissionCode.PROJECTS_UPDATE,
    PermissionCode.FINANCE_VIEW, PermissionCode.FINANCE_CREATE, PermissionCode.FINANCE_UPDATE, PermissionCode.FINANCE_DOCUMENTS_VIEW,
    PermissionCode.JOBS_VIEW, PermissionCode.JOBS_CREATE, PermissionCode.JOBS_UPDATE, PermissionCode.JOBS_PUBLISH,
    PermissionCode.CANDIDATES_VIEW, PermissionCode.CANDIDATES_CREATE, PermissionCode.CANDIDATES_UPDATE,
    PermissionCode.EMPLOYERS_VIEW, PermissionCode.EMPLOYERS_CREATE, PermissionCode.EMPLOYERS_UPDATE,
    PermissionCode.REPORTS_VIEW, PermissionCode.ANALYTICS_VIEW, PermissionCode.CONTENT_MANAGE
  ],
  [SystemRole.MANAGER]: [
    PermissionCode.USERS_VIEW, PermissionCode.LEADS_VIEW, PermissionCode.LEADS_UPDATE, PermissionCode.LEADS_ASSIGN,
    PermissionCode.PROJECTS_VIEW, PermissionCode.PROJECTS_UPDATE, PermissionCode.FINANCE_VIEW,
    PermissionCode.JOBS_VIEW, PermissionCode.JOBS_UPDATE, PermissionCode.CANDIDATES_VIEW, PermissionCode.EMPLOYERS_VIEW,
    PermissionCode.REPORTS_VIEW, PermissionCode.ANALYTICS_VIEW
  ],
  [SystemRole.TEAM_LEADER]: [
    PermissionCode.LEADS_VIEW, PermissionCode.LEADS_UPDATE, PermissionCode.LEADS_ASSIGN,
    PermissionCode.PROJECTS_VIEW, PermissionCode.PROJECTS_UPDATE, PermissionCode.JOBS_VIEW
  ],
  [SystemRole.EXECUTIVE]: [
    PermissionCode.LEADS_VIEW, PermissionCode.LEADS_UPDATE, PermissionCode.PROJECTS_VIEW
  ],
  [SystemRole.RECRUITER]: [
    PermissionCode.JOBS_VIEW, PermissionCode.JOBS_CREATE, PermissionCode.JOBS_UPDATE,
    PermissionCode.CANDIDATES_VIEW, PermissionCode.CANDIDATES_UPDATE, PermissionCode.EMPLOYERS_VIEW
  ],
  [SystemRole.SALES_EXECUTIVE]: [
    PermissionCode.LEADS_VIEW, PermissionCode.LEADS_CREATE, PermissionCode.LEADS_UPDATE
  ],
  [SystemRole.CONTENT_MANAGER]: [
    PermissionCode.CONTENT_MANAGE, PermissionCode.ANALYTICS_VIEW
  ],
  [SystemRole.CANDIDATE]: [
    PermissionCode.JOBS_VIEW, PermissionCode.CANDIDATES_VIEW, PermissionCode.CANDIDATES_UPDATE
  ],
  [SystemRole.EMPLOYER]: [
    PermissionCode.JOBS_VIEW, PermissionCode.JOBS_CREATE, PermissionCode.JOBS_UPDATE, PermissionCode.EMPLOYERS_VIEW, PermissionCode.EMPLOYERS_UPDATE
  ],
  [SystemRole.CUSTOMER]: [
    PermissionCode.PROJECTS_VIEW, PermissionCode.FINANCE_VIEW
  ],
};

export function hasRole(userRole: SystemRole, allowedRoles: SystemRole[]): boolean {
  if (userRole === SystemRole.SUPER_ADMIN) return true;
  return allowedRoles.includes(userRole);
}

export function hasPermission(userRole: SystemRole, permission: PermissionCode): boolean {
  if (userRole === SystemRole.SUPER_ADMIN) return true;
  const userPermissions = ROLE_PERMISSIONS[userRole] || [];
  return userPermissions.includes(permission);
}

export function canAccessBusiness(
  userRole: SystemRole,
  userVertical: BusinessVertical | null,
  targetVertical: BusinessVertical
): boolean {
  if (userRole === SystemRole.SUPER_ADMIN) return true;
  if (!userVertical) return false;
  return userVertical === targetVertical;
}

export function isAdmin(userRole: SystemRole): boolean {
  return [
    SystemRole.SUPER_ADMIN,
    SystemRole.BUSINESS_ADMIN,
    SystemRole.MANAGER,
    SystemRole.TEAM_LEADER,
    SystemRole.CONTENT_MANAGER,
  ].includes(userRole);
}

export function isSuperAdmin(userRole: SystemRole): boolean {
  return userRole === SystemRole.SUPER_ADMIN;
}
