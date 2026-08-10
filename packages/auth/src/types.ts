import { SystemRole, BusinessVertical } from "./roles";

export interface AuthSessionUser {
  id: string;
  email: string;
  name: string;
  role: SystemRole;
  businessVertical: BusinessVertical | null;
  image?: string | null;
}

export interface AuthSession {
  user: AuthSessionUser;
  expires: string;
}
