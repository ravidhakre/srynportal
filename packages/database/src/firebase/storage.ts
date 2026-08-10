import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  type StorageReference,
} from "firebase/storage";
import { getFirebaseStorage } from "./client";

export enum StoragePathPrefix {
  PUBLIC_MEDIA = "public/media",
  PUBLIC_BLOG = "public/blog",
  PUBLIC_PORTFOLIO = "public/portfolio",
  PRIVATE_CANDIDATES = "private/candidates",
  PRIVATE_FINANCE = "private/finance",
  PRIVATE_PROJECTS = "private/projects",
}

export async function uploadPublicFile(
  folder: StoragePathPrefix.PUBLIC_MEDIA | StoragePathPrefix.PUBLIC_BLOG | StoragePathPrefix.PUBLIC_PORTFOLIO,
  fileName: string,
  file: Blob | ArrayBuffer
): Promise<string> {
  const storage = getFirebaseStorage();
  const fileRef: StorageReference = ref(storage, `${folder}/${Date.now()}_${fileName}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

export async function uploadPrivateFile(
  folder: StoragePathPrefix.PRIVATE_CANDIDATES | StoragePathPrefix.PRIVATE_FINANCE | StoragePathPrefix.PRIVATE_PROJECTS,
  entityId: string,
  fileName: string,
  file: Blob | ArrayBuffer
): Promise<{ path: string; downloadUrl: string }> {
  const storage = getFirebaseStorage();
  const path = `${folder}/${entityId}/${Date.now()}_${fileName}`;
  const fileRef: StorageReference = ref(storage, path);
  await uploadBytes(fileRef, file);
  const downloadUrl = await getDownloadURL(fileRef);
  return { path, downloadUrl };
}

export async function deleteFileByPath(path: string): Promise<boolean> {
  try {
    const storage = getFirebaseStorage();
    const fileRef = ref(storage, path);
    await deleteObject(fileRef);
    return true;
  } catch (error) {
    console.error("Failed to delete storage file:", error);
    return false;
  }
}
