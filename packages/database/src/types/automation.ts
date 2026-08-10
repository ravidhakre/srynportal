import { BusinessVertical } from "@sryn/auth";
import { FirestoreTimestamp } from "./core";

export type SystemEventStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";

export interface SystemEventDocument {
  id?: string;
  eventId: string;
  eventType: string;
  businessVertical?: BusinessVertical | string;
  entityType: string;
  entityId: string;
  userId?: string;
  payload?: Record<string, unknown>;
  status: SystemEventStatus;
  retryCount: number;
  errorMessage?: string;
  createdAt: FirestoreTimestamp;
  processedAt?: FirestoreTimestamp;
}

export interface NotificationPreferencesDocument {
  id?: string;
  userId: string;
  inApp: boolean;
  email: boolean;
  sms: boolean;
  whatsapp: boolean;
  leadUpdates: boolean;
  applicationUpdates: boolean;
  interviewUpdates: boolean;
  followupReminders: boolean;
  projectUpdates: boolean;
  paymentUpdates: boolean;
  systemAlerts: boolean;
  updatedAt: FirestoreTimestamp;
}

export type QueueStatus = "QUEUED" | "PROCESSING" | "SENT" | "FAILED" | "CANCELLED";

export interface EmailQueueDocument {
  id?: string;
  emailId: string;
  to: string;
  cc?: string;
  bcc?: string;
  template?: string;
  subject: string;
  variables?: Record<string, unknown>;
  businessVertical?: BusinessVertical | string;
  relatedEntityType?: string;
  relatedEntityId?: string;
  status: QueueStatus;
  attempts: number;
  scheduledAt?: FirestoreTimestamp;
  sentAt?: FirestoreTimestamp;
  error?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface EmailTemplateDocument {
  id?: string;
  templateId: string;
  name: string;
  eventType: string;
  businessVertical?: BusinessVertical | string;
  subject: string;
  html: string;
  text: string;
  status: "DRAFT" | "ACTIVE" | "INACTIVE";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface WhatsappQueueDocument {
  id?: string;
  messageId: string;
  phone: string;
  templateName: string;
  variables?: Record<string, unknown>;
  businessVertical?: BusinessVertical | string;
  relatedEntityType?: string;
  relatedEntityId?: string;
  status: QueueStatus;
  attempts: number;
  scheduledAt?: FirestoreTimestamp;
  sentAt?: FirestoreTimestamp;
  error?: string;
  createdAt: FirestoreTimestamp;
}

export interface SmsQueueDocument {
  id?: string;
  messageId: string;
  phone: string;
  template: string;
  variables?: Record<string, unknown>;
  businessVertical?: BusinessVertical | string;
  relatedEntityType?: string;
  relatedEntityId?: string;
  status: QueueStatus;
  attempts: number;
  scheduledAt?: FirestoreTimestamp;
  sentAt?: FirestoreTimestamp;
  error?: string;
  createdAt: FirestoreTimestamp;
}

export type CommunicationChannel = "IN_APP" | "EMAIL" | "WHATSAPP" | "SMS" | "PHONE" | "SYSTEM";
export type CommunicationDirection = "OUTBOUND" | "INBOUND";

export interface CommunicationLogDocument {
  id?: string;
  communicationId: string;
  businessVertical?: BusinessVertical | string;
  channel: CommunicationChannel;
  direction: CommunicationDirection;
  userId?: string;
  relatedEntityType?: string;
  relatedEntityId?: string;
  recipient: string;
  template?: string;
  status: string;
  sentAt?: FirestoreTimestamp;
  createdAt: FirestoreTimestamp;
}

export type InvoiceStatus = "DRAFT" | "ISSUED" | "PARTIALLY_PAID" | "PAID" | "OVERDUE" | "CANCELLED";

export interface InvoiceItem {
  itemId?: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  taxRate: number;
  total: number;
}

export interface InvoiceDocument {
  id?: string;
  invoiceId: string; // e.g. INV-2026-000001
  businessVertical: BusinessVertical | string;
  clientId: string;
  quoteId?: string;
  items: InvoiceItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  currency: string;
  dueDate?: FirestoreTimestamp;
  status: InvoiceStatus;
  notes?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type PaymentStatus = "CREATED" | "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED" | "PARTIALLY_REFUNDED";
export type PaymentProvider = "RAZORPAY" | "CASHFREE" | "PAYU" | "SABPAISA" | "MANUAL" | "OTHER";

export interface PaymentDocument {
  id?: string;
  paymentId: string; // e.g. PAY-2026-000001
  invoiceId?: string;
  quoteId?: string;
  clientId?: string;
  businessVertical: BusinessVertical | string;
  provider: PaymentProvider;
  providerOrderId?: string;
  providerPaymentId?: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod?: string;
  paidAt?: FirestoreTimestamp;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface AutomationRuleDocument {
  id?: string;
  ruleId: string;
  name: string;
  businessVertical?: BusinessVertical | string;
  eventType: string;
  conditions?: Record<string, unknown>;
  actions: Array<{ type: string; config?: Record<string, unknown> }>;
  status: "ACTIVE" | "INACTIVE";
  createdBy?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export type AutomationRunStatus = "RUNNING" | "SUCCESS" | "FAILED" | "SKIPPED";

export interface AutomationRunDocument {
  id?: string;
  runId: string;
  ruleId: string;
  eventId: string;
  status: AutomationRunStatus;
  startedAt: FirestoreTimestamp;
  completedAt?: FirestoreTimestamp;
  error?: string;
  retryCount: number;
}

export type ErrorSeverity = "INFO" | "WARNING" | "ERROR" | "CRITICAL";

export interface SystemErrorDocument {
  id?: string;
  errorId: string;
  service: string;
  function: string;
  businessVertical?: BusinessVertical | string;
  severity: ErrorSeverity;
  message: string;
  safeContext?: Record<string, unknown>;
  timestamp: FirestoreTimestamp;
}
