import React from "react";
import { Metadata } from "next";
import { ServiceDetailTemplate, ServiceDetailConfig } from "../../../components/service-detail-template";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Custom Online Stores | SRYN Technology",
  description: "E-commerce web development: online storefronts, payment gateway integration, order tracking, and product management.",
};

const ecommerceConfig: ServiceDetailConfig = {
  title: "E-Commerce Stores Engineered for Sales",
  badge: "E-COMMERCE DEVELOPMENT",
  tagline: "Online Storefronts & Checkout Systems",
  description: "Sell products online with fast, secure e-commerce portals equipped with payment gateways, inventory management, and automated order notifications.",
  overview: "Our e-commerce development team crafts digital storefronts built for conversion. From product showcase to multi-currency payment checkout and instant WhatsApp order confirmations, we build seamless shopping experiences.",
  problemsSolved: [
    "High commission fees on third-party marketplace platforms.",
    "Complex checkout flows causing high shopping cart abandonment.",
    "Manual order tracking leading to customer support delays.",
  ],
  deliverables: [
    "Custom E-Commerce Storefront",
    "Admin Product Catalog",
    "Razorpay / UPI Payment Gateway",
    "Order Management Portal",
  ],
  features: [
    { title: "Fast Mobile Checkout", desc: "Optimized 1-step checkout flow supporting UPI, Cards, and Netbanking." },
    { title: "Inventory Sync", desc: "Real-time stock updates and low-stock alert triggers." },
    { title: "WhatsApp Order Alerts", desc: "Instant automated WhatsApp updates to buyers upon order placement." },
  ],
  process: [
    { step: "01", title: "Catalog Spec", desc: "Product & category structure." },
    { step: "02", title: "Store UI", desc: "Responsive storefront design." },
    { step: "03", title: "Gateway Integration", desc: "Secure payment setup." },
    { step: "04", title: "Launch", desc: "Testing live payments & launch." },
  ],
  techStack: ["Next.js", "React", "Razorpay API", "Firebase", "Node.js"],
  whoItIsFor: "Retailers, D2C brands, and wholesalers wanting an independent digital storefront with total control over branding and customer data.",
  faqs: [
    { q: "Which payment gateways do you support?", a: "We support Razorpay, Paytm, PhonePe, Stripe, and custom UPI integrations." },
  ],
};

export default function EcommercePage() {
  return <ServiceDetailTemplate config={ecommerceConfig} />;
}
