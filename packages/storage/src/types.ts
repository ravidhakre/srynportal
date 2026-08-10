export enum StorageBucketType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export interface UploadFileOptions {
  bucketType: StorageBucketType;
  path: string;
  fileBuffer: Buffer;
  contentType: string;
  maxSizeBytes?: number;
}

export interface SignedUrlOptions {
  path: string;
  expiresInSeconds?: number;
}

export interface StorageProvider {
  uploadFile(options: UploadFileOptions): Promise<{ url: string; path: string }>;
  getSignedUrl(options: SignedUrlOptions): Promise<string>;
  deleteFile(path: string, bucketType: StorageBucketType): Promise<boolean>;
}
