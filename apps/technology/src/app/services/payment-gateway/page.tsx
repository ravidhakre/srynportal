import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "Payment Gateway Integration Services | SRYN Technology",
  description: "Secure payment gateway integration: Razorpay, UPI, Credit Cards, Netbanking, and Stripe.",
};

const pgConfig: ServiceDetailConfig = {
  title: "Secure Payment Gateway Integration",
  badge: "PAYMENT GATEWAY",
  tagline: "Razorpay, UPI & Online Payments",
  description: "Accept instant online payments on your website or web app with secure payment gateway integration.",
  overview: "We integrate Razorpay, UPI, and international payment gateways into custom checkout flows with automatic payment verification and instant receipt generation.",
  problemsSolved: ["Failed transaction drops due to poor checkout UI.", "Security vulnerabilities during payment processing."],
  deliverables: ["Razorpay SDK Integration", "Payment Callback Verification", "Automated Receipt Email"],
  features: [{ title: "UPI & QR Support", desc: "Instant payments via GPay, PhonePe, and Paytm UPI." }],
  process: [{ step: "01", title: "Key Setup", desc: "Configure Merchant API keys." }, { step: "02", title: "Testing", desc: "Sandbox & live testing." }],
  techStack: ["Razorpay API", "Next.js", "Node.js", "Stripe"],
  whoItIsFor: "E-Commerce stores, service businesses, and portals accepting digital customer payments.",
  faqs: [{ q: "Is payment processing PCI-DSS compliant?", a: "Yes, all payment data is processed securely through official PCI-DSS compliant merchant gateways." }],
};

export default function PaymentGatewayPage() {
  return <ServiceDetailTemplate config={pgConfig} />;
}
