export enum NotificationChannel {
  IN_APP = "IN_APP",
  EMAIL = "EMAIL",
  WHATSAPP = "WHATSAPP",
  SMS = "SMS",
}

export enum NotificationEvent {
  NEW_LEAD = "NEW_LEAD",
  NEW_CANDIDATE = "NEW_CANDIDATE",
  NEW_EMPLOYER = "NEW_EMPLOYER",
  NEW_JOB = "NEW_JOB",
  NEW_JOB_APPLICATION = "NEW_JOB_APPLICATION",
  NEW_FINANCE_APPLICATION = "NEW_FINANCE_APPLICATION",
  FOLLOWUP_DUE = "FOLLOWUP_DUE",
  INTERVIEW_SCHEDULED = "INTERVIEW_SCHEDULED",
  DOCUMENT_UPLOADED = "DOCUMENT_UPLOADED",
  JOB_APPROVED = "JOB_APPROVED",
  CANDIDATE_SHORTLISTED = "CANDIDATE_SHORTLISTED",
}

export interface NotificationPayload {
  event: NotificationEvent;
  recipientId: string;
  recipientEmail?: string;
  recipientPhone?: string;
  title: string;
  message: string;
  channels: NotificationChannel[];
  data?: Record<string, unknown>;
}
