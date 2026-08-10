import { BusinessVertical } from "@sryn/auth";
import { LeadSource } from "@sryn/crm";
import { FirestoreTimestamp } from "./core";

export interface LeadDocument {
  id: string;
  leadId: string;
  name: string;
  phone: string;
  email?: string;
  source: LeadSource;
  businessVertical: BusinessVertical;
  assignedExecutiveUid?: string;
  status: string; // Vertical-specific status (TechLeadStatus | FinLeadStatus)
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  notes?: string;
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
  };
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
  deletedAt?: FirestoreTimestamp | null;
}

export interface LeadSourceDocument {
  id: string;
  name: string;
  code: LeadSource;
  isActive: boolean;
}

export interface LeadActivityDocument {
  id: string;
  leadId: string;
  actorUid: string;
  action: string;
  previousStatus?: string;
  newStatus?: string;
  description: string;
  timestamp: FirestoreTimestamp;
}

export interface LeadFollowupDocument {
  id: string;
  leadId: string;
  assignedUid: string;
  dueDate: FirestoreTimestamp;
  notes: string;
  isCompleted: boolean;
  completedAt?: FirestoreTimestamp | null;
  createdAt: FirestoreTimestamp;
}

export interface LeadAssignmentDocument {
  id: string;
  leadId: string;
  assignedByUid: string;
  assignedToUid: string;
  assignedAt: FirestoreTimestamp;
}

export interface CustomerDocument {
  id: string;
  customerId: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  businessVertical: BusinessVertical;
  totalDeals: number;
  totalRevenue: number;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface NoteDocument {
  id: string;
  entityId: string;
  entityType: "LEAD" | "CUSTOMER" | "PROJECT" | "APPLICATION";
  authorUid: string;
  content: string;
  createdAt: FirestoreTimestamp;
}
