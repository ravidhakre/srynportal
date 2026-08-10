export function mapFirebaseAuthError(error: unknown): string {
  if (!error || typeof error !== "object") return "An unexpected authentication error occurred.";

  const err = error as { code?: string; message?: string };
  switch (err.code) {
    case "auth/invalid-email":
      return "The email address entered is invalid.";
    case "auth/user-disabled":
      return "This user account has been disabled. Please contact SRYN Support.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Invalid email or password credentials.";
    case "auth/email-already-in-use":
      return "An account with this email address already exists.";
    case "auth/weak-password":
      return "Password should be at least 6 characters long.";
    case "auth/too-many-requests":
      return "Too many failed login attempts. Please wait a few minutes and try again.";
    case "auth/requires-recent-login":
      return "Please log in again before completing this operation.";
    case "auth/account-suspended":
      return "Your account has been suspended. Access to SRYN portals is prohibited.";
    default:
      return err.message || "Authentication failed. Please check your credentials.";
  }
}
