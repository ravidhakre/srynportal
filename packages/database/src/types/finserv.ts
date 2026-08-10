import { FirestoreTimestamp } from "./core";

export type EmploymentType = "SALARIED" | "SELF_EMPLOYED" | "BUSINESS_OWNER" | "PROFESSIONAL" | "OTHER";

export type FinanceLeadStatus =
  | "NEW"
  | "CONTACTED"
  | "INTERESTED"
  | "ELIGIBILITY_CHECK"
  | "DOCUMENTS_REQUIRED"
  | "DOCUMENTS_RECEIVED"
  | "APPLICATION"
  | "UNDER_PROCESS"
  | "APPROVED"
  | "REJECTED"
  | "DISBURSED"
  | "CLOSED"
  | "ON_HOLD";

export type FinanceLeadPriority = "LOW" | "NORMAL" | "HIGH" | "URGENT";

export interface FinanceLeadDocument {
  id?: string;
  leadId: string; // Human-readable e.g. FIN-2026-000001
  name: string;
  phone: string;
  email?: string;
  city?: string;
  state?: string;
  employmentType: EmploymentType;
  income?: string;
  companyOrBusiness?: string;
  experience?: string;
  requirementType: string;
  requestedAmount?: string;
  existingObligations?: string;
  creditScoreRange?: string;
  preferredContactMethod?: string;
  message?: string;
  consent: boolean;
  source: string;
  status: FinanceLeadStatus;
  priority: FinanceLeadPriority;
  assignedTo?: string;
  businessVertical: "finserv";
  utm?: Record<string, string | undefined>;
  landingPage?: string;
  referrer?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface FinanceLeadActivityDocument {
  id?: string;
  leadId: string;
  userId: string;
  userName?: string;
  action:
    | "CREATED"
    | "STATUS_CHANGED"
    | "NOTE_ADDED"
    | "ASSIGNED"
    | "FOLLOWUP_ADDED"
    | "CALL"
    | "EMAIL"
    | "WHATSAPP"
    | "MEETING"
    | "DOCUMENT_REQUESTED"
    | "DOCUMENT_RECEIVED"
    | "APPLICATION_SUBMITTED"
    | "APPROVAL_RECORDED"
    | "DISBURSEMENT_RECORDED";
  oldStatus?: string;
  newStatus?: string;
  note?: string;
  createdAt: FirestoreTimestamp;
}

export interface FinanceLeadFollowupDocument {
  id?: string;
  leadId: string;
  assignedTo: string;
  followupDate: string;
  followupTime?: string;
  note: string;
  status: "PENDING" | "COMPLETED" | "MISSED" | "CANCELLED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type ApplicationStatus =
  | "DRAFT"
  | "SUBMITTED"
  | "ELIGIBILITY_CHECK"
  | "DOCUMENTS_PENDING"
  | "DOCUMENTS_RECEIVED"
  | "UNDER_REVIEW"
  | "SUBMITTED_TO_PROVIDER"
  | "APPROVED"
  | "REJECTED"
  | "DISBURSED"
  | "CLOSED";

export interface LoanApplicationDocument {
  id?: string;
  applicationId: string;
  leadId: string;
  customerId?: string;
  applicantName: string;
  applicantPhone: string;
  applicantEmail?: string;
  productType: string;
  requestedAmount: number;
  approvedAmount?: number;
  assignedTo?: string;
  status: ApplicationStatus;
  notes?: string;
  submittedAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
  createdAt: FirestoreTimestamp;
}

export type DocumentType =
  | "PAN"
  | "AADHAAR"
  | "BANK_STATEMENT"
  | "INCOME_PROOF"
  | "EMPLOYMENT"
  | "BUSINESS"
  | "PROPERTY"
  | "OTHER";

export type DocumentVerificationStatus = "PENDING" | "VERIFIED" | "REJECTED";

export interface FinanceDocumentMetadata {
  id?: string;
  documentId: string;
  applicationId: string;
  leadId?: string;
  customerId?: string;
  documentType: DocumentType;
  fileName: string;
  storagePath: string; // /private/finserv/applications/{applicationId}/documents/{documentId}
  fileSize: number;
  mimeType: string;
  uploadedBy: string;
  verificationStatus: DocumentVerificationStatus;
  rejectionReason?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface FinanceProductDocument {
  id?: string;
  code: string;
  name: string;
  category: "PERSONAL_LOAN" | "BUSINESS_LOAN" | "HOME_LOAN" | "LAP" | "CREDIT_CARD" | "CREDIT_CONSULTATION";
  description: string;
  eligibilitySummary: string;
  requiredDocumentsSummary: string;
  status: "DRAFT" | "ACTIVE" | "INACTIVE" | "ARCHIVED";
  featured?: boolean;
  sortOrder?: number;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type FinanceCustomerStatus = "PROSPECT" | "ACTIVE" | "APPLICATION" | "COMPLETED" | "INACTIVE";

export interface FinanceCustomerDocument {
  id?: string;
  customerId: string; // e.g. FCU-2026-000001
  name: string;
  email?: string;
  phone: string;
  city?: string;
  state?: string;
  assignedTo?: string;
  status: FinanceCustomerStatus;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}
