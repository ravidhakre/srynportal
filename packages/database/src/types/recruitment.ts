import { FirestoreTimestamp } from "./core";

export type RecruitmentWorkMode = "ON_SITE" | "HYBRID" | "REMOTE";
export type RecruitmentEmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "TEMPORARY" | "FREELANCE";
export type RecruitmentJobStatus = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "PUBLISHED" | "PAUSED" | "CLOSED" | "REJECTED" | "EXPIRED";
export type RecruitmentApplicationStatus = "APPLIED" | "UNDER_REVIEW" | "SHORTLISTED" | "INTERVIEW" | "SELECTED" | "REJECTED" | "WITHDRAWN" | "HIRED";

export interface CandidateProfileDocument {
  uid: string;
  candidateId: string; // CAN-2026-000001
  name: string;
  email: string;
  mobile: string;
  currentCity?: string;
  preferredLocations?: string[];
  headline?: string;
  professionalSummary?: string;
  totalExperienceYears?: number;
  currentCompany?: string;
  currentDesignation?: string;
  skills: string[];
  education?: string;
  certifications?: string[];
  preferredJobType?: RecruitmentEmploymentType;
  preferredWorkMode?: RecruitmentWorkMode;
  expectedSalary?: string;
  noticePeriodDays?: number;
  portfolioUrl?: string;
  linkedInUrl?: string;
  resumeStoragePath?: string; // Private path: /private/recruitment/candidates/{candidateId}/resumes/{resumeId}
  photoStoragePath?: string;
  profileCompletionPercentage: number;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface CandidateDocument {
  id: string; // Same as uid
  candidateId: string;
  name: string;
  email: string;
  mobile: string;
  status: "ACTIVE" | "INACTIVE" | "HIRED" | "SCREENING" | "CONTACTED" | "SHORTLISTED" | "SUBMITTED" | "INTERVIEW" | "OFFERED" | "JOINED" | "ON_HOLD";
  assignedRecruiterUid?: string;
  source?: string;
  createdAt: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp;
}

export interface ResumeDocument {
  id: string;
  resumeId: string;
  candidateId: string;
  storagePath: string; // Private path: /private/recruitment/candidates/{candidateId}/resumes/{resumeId}
  fileName: string;
  mimeType: string;
  fileSize: number;
  isPrimary: boolean;
  uploadedAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface EmployerProfileDocument {
  id?: string;
  employerId: string; // EMP-2026-000001
  companyName: string;
  industry: string;
  website?: string;
  companySize?: string;
  contactPerson: string;
  designation?: string;
  email: string;
  mobile: string;
  location: string;
  companyDescription?: string;
  logoStoragePath?: string;
  verificationStatus: "PENDING_VERIFICATION" | "VERIFIED" | "REJECTED" | "SUSPENDED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface JobPostingDocument {
  id?: string;
  jobId: string; // JOB-2026-000001
  slug: string;
  employerUid: string;
  employerId?: string;
  companyName: string;
  companyLogoUrl?: string;
  title: string;
  department: string;
  industry: string;
  description: string;
  responsibilities: string;
  requirements: string;
  preferredQualifications?: string;
  benefits?: string;
  skills: string[];
  experienceYearsMin: number;
  experienceYearsMax: number;
  salaryMin?: number;
  salaryMax?: number;
  salaryType?: string;
  location: string;
  workMode: RecruitmentWorkMode;
  employmentType: RecruitmentEmploymentType;
  vacanciesCount: number;
  applicationDeadline?: FirestoreTimestamp;
  status: RecruitmentJobStatus;
  rejectionReason?: string;
  viewsCount?: number;
  applicationsCount?: number;
  businessVertical: "recruitment";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface JobApplicationDocument {
  id?: string;
  applicationId: string; // APP-2026-000001
  jobId: string;
  jobTitle: string;
  employerUid: string;
  employerId?: string;
  candidateUid: string;
  candidateId?: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  currentLocation?: string;
  expectedSalary?: string;
  noticePeriod?: string;
  additionalInformation?: string;
  resumeStoragePath: string; // Private path
  coverLetter?: string;
  status: RecruitmentApplicationStatus;
  internalRecruiterStatus?: string;
  source: string;
  appliedAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface SavedJobDocument {
  id?: string;
  candidateUid: string;
  jobId: string;
  jobTitle?: string;
  companyName?: string;
  location?: string;
  savedAt: FirestoreTimestamp;
}

export interface InterviewDocument {
  id?: string;
  interviewId: string; // INT-2026-000001
  applicationId: string;
  candidateUid: string;
  candidateName?: string;
  employerUid: string;
  employerName?: string;
  jobId: string;
  jobTitle: string;
  recruiterUid?: string;
  interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "TECHNICAL" | "HR" | "MANAGERIAL" | "FINAL";
  scheduledTime: FirestoreTimestamp;
  meetingLink?: string;
  locationDetails?: string;
  instructions?: string;
  notes?: string;
  feedback?: string;
  result?: "PASS" | "FAIL" | "HOLD" | "RESCHEDULE" | "PENDING";
  status: "SCHEDULED" | "RESCHEDULED" | "COMPLETED" | "CANCELLED" | "NO_SHOW";
  createdAt: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp;
}

export interface PlacementDocument {
  id?: string;
  placementId: string; // PLC-2026-000001
  candidateUid: string;
  candidateName?: string;
  employerUid: string;
  employerName?: string;
  jobId: string;
  jobTitle?: string;
  requirementId?: string;
  joiningDate: FirestoreTimestamp;
  offeredSalary?: number;
  billingAmount?: number;
  recruiterUid?: string;
  notes?: string;
  status: "OFFERED" | "ACCEPTED" | "JOINED" | "CANCELLED" | "REPLACEMENT_REQUIRED" | "COMPLETED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface StaffingRequirementDocument {
  id?: string;
  requirementId: string; // REQ-2026-000001
  employerId: string;
  employerName: string;
  jobTitle: string;
  department?: string;
  vacanciesCount: number;
  location: string;
  salaryRange?: string;
  experienceYears?: string;
  skills: string[];
  jobDescription: string;
  employmentType?: RecruitmentEmploymentType;
  workMode?: RecruitmentWorkMode;
  priority: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  deadline?: FirestoreTimestamp;
  assignedRecruiterUid?: string;
  status: "NEW" | "ACTIVE" | "SOURCING" | "SHORTLISTING" | "INTERVIEWING" | "OFFER" | "FULFILLED" | "CANCELLED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface CandidateSubmissionDocument {
  id?: string;
  submissionId: string; // SUB-2026-000001
  candidateUid: string;
  candidateName?: string;
  jobId?: string;
  requirementId?: string;
  employerId: string;
  employerName?: string;
  recruiterUid: string;
  resumeStoragePath?: string;
  candidateSummary?: string;
  clientFeedback?: string;
  status: "DRAFT" | "SUBMITTED" | "CLIENT_REVIEW" | "SHORTLISTED" | "REJECTED" | "INTERVIEW" | "SELECTED" | "OFFER" | "JOINED" | "WITHDRAWN";
  submittedAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface RecruitmentEmployerLeadDocument {
  id?: string;
  leadId: string; // RCR-2026-000001
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry?: string;
  location?: string;
  website?: string;
  requirement?: string;
  source: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL" | "NEGOTIATION" | "ACTIVE_CLIENT" | "LOST" | "ON_HOLD";
  priority: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  assignedTo?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface RecruitmentFollowupDocument {
  id?: string;
  entityType: "CANDIDATE" | "EMPLOYER" | "JOB" | "APPLICATION" | "SUBMISSION" | "PLACEMENT";
  entityId: string;
  assignedTo: string;
  followupDate: string;
  followupTime?: string;
  note: string;
  status: "PENDING" | "COMPLETED" | "MISSED" | "CANCELLED";
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}
