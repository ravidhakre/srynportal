import { BusinessVertical } from "@sryn/auth";
import { FirestoreTimestamp } from "./core";

export type TechnologyLeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "REQUIREMENT"
  | "PROPOSAL"
  | "NEGOTIATION"
  | "WON"
  | "LOST"
  | "ON_HOLD";

export type LeadPriority = "LOW" | "NORMAL" | "HIGH" | "URGENT";

export interface TechnologyLeadDocument {
  id: string;
  leadId: string; // e.g. TECH-2026-000001
  name: string;
  phone: string;
  email: string;
  company?: string;
  service: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  currentWebsite?: string;
  description: string;
  preferredContactMethod?: string;
  businessVertical: typeof BusinessVertical.TECHNOLOGY;
  status: TechnologyLeadStatus;
  priority: LeadPriority;
  assignedToUid?: string | null;
  assignedToName?: string | null;
  source: string;
  utm?: Record<string, string | undefined>;
  landingPage?: string;
  referrer?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface TechnologyLeadActivityDocument {
  id: string;
  leadId: string;
  userId: string;
  userName: string;
  action: string; // e.g. CREATED, STATUS_CHANGED, NOTE_ADDED, ASSIGNED
  oldStatus?: TechnologyLeadStatus;
  newStatus?: TechnologyLeadStatus;
  note?: string;
  createdAt: FirestoreTimestamp;
}

export interface TechnologyLeadFollowupDocument {
  id: string;
  leadId: string;
  assignedToUid: string;
  assignedToName: string;
  followupDate: string;
  followupTime?: string;
  note: string;
  status: "PENDING" | "COMPLETED" | "MISSED" | "CANCELLED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface TechnologyServiceDocument {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Development" | "Digital Marketing" | "Automation";
  iconName?: string;
  isFeatured: boolean;
  order: number;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface TechnologyPortfolioDocument {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  featuredImage?: string;
  technologies: string[];
  isPublished: boolean;
  order: number;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type TechnologyProjectStatus = "PLANNING" | "IN_PROGRESS" | "ON_HOLD" | "COMPLETED" | "CANCELLED";
export type TechnologyProjectPriority = "LOW" | "NORMAL" | "HIGH" | "URGENT";

export interface TechnologyProjectDocument {
  id?: string;
  projectId: string; // e.g. PRJ-2026-000001
  clientId?: string;
  clientUid?: string;
  name: string;
  description: string;
  service: string;
  status: TechnologyProjectStatus;
  priority: TechnologyProjectPriority;
  assignedTo?: string;
  assignedToUid?: string;
  startDate?: FirestoreTimestamp;
  expectedEndDate?: FirestoreTimestamp;
  completionDate?: FirestoreTimestamp;
  budget?: number;
  notes?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type TechnologyTaskStatus = "TODO" | "IN_PROGRESS" | "REVIEW" | "COMPLETED" | "BLOCKED";

export interface TechnologyProjectTaskDocument {
  id?: string;
  taskId: string; // e.g. TSK-2026-000001
  projectId: string;
  title: string;
  description?: string;
  assignedTo?: string;
  priority: TechnologyProjectPriority;
  status: TechnologyTaskStatus;
  dueDate?: FirestoreTimestamp;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type TechnologyClientStatus = "LEAD" | "ACTIVE" | "INACTIVE" | "COMPLETED";

export interface TechnologyClientDocument {
  id?: string;
  clientId: string; // e.g. CLI-2026-000001
  name: string;
  company?: string;
  email: string;
  phone: string;
  website?: string;
  industry?: string;
  status: TechnologyClientStatus;
  assignedTo?: string;
  notes?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type TechnologyQuoteStatus = "DRAFT" | "SENT" | "ACCEPTED" | "REJECTED" | "EXPIRED";

export interface TechnologyQuoteItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface TechnologyQuoteDocument {
  id?: string;
  quoteId: string; // e.g. QTE-2026-000001
  leadId?: string;
  clientId?: string;
  title: string;
  items: TechnologyQuoteItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  validUntil?: FirestoreTimestamp;
  status: TechnologyQuoteStatus;
  createdBy: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}
