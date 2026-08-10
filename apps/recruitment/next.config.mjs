/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@sryn/ui", "@sryn/config", "@sryn/auth", "@sryn/crm", "@sryn/analytics", "@sryn/notifications", "@sryn/storage", "@sryn/database"],
};

export default nextConfig;
