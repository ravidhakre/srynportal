import { BusinessVertical } from "@sryn/auth";

export enum LeadSource {
  WEBSITE = "WEBSITE",
  GOOGLE = "GOOGLE",
  META = "META",
  INSTAGRAM = "INSTAGRAM",
  WHATSAPP = "WHATSAPP",
  ORGANIC = "ORGANIC",
  REFERRAL = "REFERRAL",
  DIRECT = "DIRECT",
  OTHER = "OTHER",
}

export enum TechLeadStatus {
  NEW = "NEW",
  CONTACTED = "CONTACTED",
  QUALIFIED = "QUALIFIED",
  REQUIREMENT = "REQUIREMENT",
  PROPOSAL = "PROPOSAL",
  NEGOTIATION = "NEGOTIATION",
  WON = "WON",
  LOST = "LOST",
}

export enum FinLeadStatus {
  NEW = "NEW",
  CONTACTED = "CONTACTED",
  INTERESTED = "INTERESTED",
  DOCUMENTS_REQUIRED = "DOCUMENTS_REQUIRED",
  DOCUMENTS_RECEIVED = "DOCUMENTS_RECEIVED",
  ELIGIBILITY_CHECK = "ELIGIBILITY_CHECK",
  APPLICATION = "APPLICATION",
  UNDER_PROCESS = "UNDER_PROCESS",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  DISBURSED = "DISBURSED",
  CLOSED = "CLOSED",
}

export interface UtmParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface BaseLeadPayload {
  name: string;
  phone: string;
  email?: string;
  source: LeadSource;
  businessVertical: BusinessVertical;
  notes?: string;
  utm?: UtmParameters;
}
