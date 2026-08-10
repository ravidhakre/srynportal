import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Mobile App Development | Android & iOS | SRYN Technology",
  description: "Cross-platform mobile application development for Android and iOS devices.",
};

const mobileConfig: ServiceDetailConfig = {
  title: "Mobile Apps Built for Performance",
  badge: "MOBILE APP DEVELOPMENT",
  tagline: "Android & iOS Applications",
  description: "Reach your customers directly on Android and iOS devices with intuitive, high-performance mobile applications.",
  overview: "SRYN Technology develops cross-platform mobile apps using React Native and cloud backends. We focus on fast load times, offline caching, push notifications, and intuitive mobile UX.",
  problemsSolved: ["Lack of direct customer engagement channels.", "Unresponsive web interfaces on mobile devices."],
  deliverables: ["Android APK / Play Store Build", "iOS App Store Build", "Push Notification Admin"],
  features: [
    { title: "Cross-Platform Codebase", desc: "Single efficient codebase running smoothly on both iOS and Android." },
    { title: "Push Notifications", desc: "Engage users with target updates." },
  ],
  process: [
    { step: "01", title: "App Design", desc: "Mobile wireframes." },
    { step: "02", title: "Development", desc: "React Native build." },
    { step: "03", title: "Store Submission", desc: "Publish to App Stores." },
  ],
  techStack: ["React Native", "TypeScript", "Firebase Cloud Messaging", "Node.js"],
  whoItIsFor: "Businesses requiring a dedicated mobile application for customers, field staff, or internal service tracking.",
  faqs: [{ q: "Do you publish apps to the Google Play Store and Apple App Store?", a: "Yes, we handle the complete store submission process." }],
};

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailTemplate config={mobileConfig} />;
}
