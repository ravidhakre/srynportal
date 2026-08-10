import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  type CollectionReference,
  type DocumentData,
} from "firebase/firestore";
import { getFirebaseDb } from "./client";

export const COLLECTIONS = {
  // Core
  USERS: "users",
  ROLES: "roles",
  PERMISSIONS: "permissions",
  BUSINESS_VERTICALS: "businessVerticals",
  NOTIFICATIONS: "notifications",
  NOTIFICATION_PREFERENCES: "notificationPreferences",
  AUDIT_LOGS: "auditLogs",
  SETTINGS: "settings",
  SYSTEM_EVENTS: "systemEvents",
  EMAIL_QUEUE: "emailQueue",
  EMAIL_TEMPLATES: "emailTemplates",
  WHATSAPP_QUEUE: "whatsappQueue",
  SMS_QUEUE: "smsQueue",
  COMMUNICATION_LOGS: "communicationLogs",
  INVOICES: "invoices",
  PAYMENTS: "payments",
  AUTOMATION_RULES: "automationRules",
  AUTOMATION_RUNS: "automationRuns",
  SYSTEM_ERRORS: "systemErrors",

  // CRM
  LEADS: "leads",
  LEAD_SOURCES: "leadSources",
  LEAD_ACTIVITIES: "leadActivities",
  LEAD_FOLLOWUPS: "leadFollowups",
  LEAD_ASSIGNMENTS: "leadAssignments",
  CUSTOMERS: "customers",
  NOTES: "notes",

  // CMS
  PAGES: "pages",
  SERVICES: "services",
  BLOGS: "blogs",
  CATEGORIES: "categories",
  FAQS: "faqs",
  TESTIMONIALS: "testimonials",
  MEDIA: "media",
  CONTACT_SUBMISSIONS: "contactSubmissions",

  // Technology
  TECHNOLOGY_LEADS: "technologyLeads",
  TECHNOLOGY_LEAD_ACTIVITIES: "technologyLeadActivities",
  TECHNOLOGY_LEAD_FOLLOWUPS: "technologyLeadFollowups",
  TECHNOLOGY_SERVICES: "technologyServices",
  TECHNOLOGY_PROJECTS: "technologyProjects",
  TECHNOLOGY_TASKS: "technologyTasks",
  TECHNOLOGY_CLIENTS: "technologyClients",
  TECHNOLOGY_QUOTES: "technologyQuotes",
  TECHNOLOGY_PORTFOLIO: "technologyPortfolio",

  // FinServ
  FINANCE_LEADS: "financeLeads",
  FINANCE_LEAD_ACTIVITIES: "financeLeadActivities",
  FINANCE_LEAD_FOLLOWUPS: "financeLeadFollowups",
  LOAN_APPLICATIONS: "loanApplications",
  FINANCE_DOCUMENTS: "financeDocuments",
  FINANCE_PRODUCTS: "financeProducts",
  FINANCE_CUSTOMERS: "financeCustomers",

  // Recruitment
  CANDIDATES: "candidates",
  CANDIDATE_PROFILES: "candidateProfiles",
  RESUMES: "resumes",
  EMPLOYERS: "employers",
  EMPLOYER_PROFILES: "employerProfiles",
  JOBS: "jobs",
  JOB_APPLICATIONS: "jobApplications",
  SAVED_JOBS: "savedJobs",
  INTERVIEWS: "interviews",
  PLACEMENTS: "placements",
  STAFFING_REQUIREMENTS: "staffingRequirements",
  CANDIDATE_SUBMISSIONS: "candidateSubmissions",
  RECRUITMENT_EMPLOYER_LEADS: "recruitmentEmployerLeads",
  RECRUITMENT_FOLLOWUPS: "recruitmentFollowups",
  RECRUITMENT_TASKS: "recruitmentTasks",
} as const;

export function getTypedCollection<T extends DocumentData>(collectionName: string): CollectionReference<T> {
  return collection(getFirebaseDb(), collectionName) as CollectionReference<T>;
}

export {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
};
