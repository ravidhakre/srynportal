import { SystemRole, BusinessVertical } from "@sryn/auth";
import { FieldValue, Timestamp } from "firebase/firestore";

export type FirestoreTimestamp = Timestamp | FieldValue | Date | string;

export interface UserProfileDocument {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  photoURL?: string;
  role: SystemRole;
  businessVertical: BusinessVertical | null;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
  deletedAt?: FirestoreTimestamp | null;
}

export interface RoleDocument {
  id: string;
  name: SystemRole;
  description: string;
  permissions: string[];
  createdAt: FirestoreTimestamp;
}

export interface PermissionDocument {
  id: string;
  code: string;
  name: string;
  module: string;
}

export interface BusinessVerticalDocument {
  id: BusinessVertical;
  name: string;
  domain: string;
  description: string;
  isActive: boolean;
}

export interface NotificationDocument {
  id: string;
  recipientUid: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  businessVertical?: BusinessVertical;
  createdAt: FirestoreTimestamp;
}

export interface AuditLogDocument {
  id: string;
  actorUid: string;
  actorEmail: string;
  actorRole: SystemRole;
  action: string;
  entity: string;
  entityId: string;
  businessVertical?: BusinessVertical;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  timestamp: FirestoreTimestamp;
}

export interface SystemSettingsDocument {
  id: string;
  siteName: string;
  maintenanceMode: boolean;
  allowedEmailDomains?: string[];
  updatedBy: string;
  updatedAt: FirestoreTimestamp;
}
