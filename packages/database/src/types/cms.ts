import { BusinessVertical } from "@sryn/auth";
import { FirestoreTimestamp } from "./core";

export interface PageDocument {
  id: string;
  slug: string;
  title: string;
  content: string;
  businessVertical: BusinessVertical;
  isPublished: boolean;
  seoTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface ServiceDocument {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  businessVertical: BusinessVertical;
  iconName?: string;
  isFeatured: boolean;
  order: number;
  createdAt: FirestoreTimestamp;
}

export interface BlogDocument {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  authorUid: string;
  authorName: string;
  businessVertical: BusinessVertical;
  categoryId: string;
  category?: string;
  tags: string[];
  isPublished: boolean;
  publishedAt?: FirestoreTimestamp | null;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface CategoryDocument {
  id: string;
  slug: string;
  name: string;
  businessVertical: BusinessVertical;
}

export interface FaqDocument {
  id: string;
  question: string;
  answer: string;
  category?: string;
  businessVertical: BusinessVertical;
  order: number;
}

export interface TestimonialDocument {
  id: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  clientPhoto?: string;
  quote: string;
  rating: number;
  businessVertical: BusinessVertical;
  isFeatured: boolean;
}

export interface MediaDocument {
  id: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  contentType: string;
  isPublic: boolean;
  uploadedByUid: string;
  createdAt: FirestoreTimestamp;
}

export interface ContactSubmissionDocument {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
  businessVertical: BusinessVertical;
  isRead: boolean;
  createdAt: FirestoreTimestamp;
}
