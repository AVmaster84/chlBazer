/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
        FRONTEND_URL: process.env.FRONTEND_URL,
        BACKEND_URL: process.env.BACKEND_URL,
        SITE_NAME: process.env.SITE_NAME,
        SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
        REST_API_URL: process.env.REST_API_URL,
        CUSTOMER_KEY: process.env.CUSTOMER_KEY,
        CUSTOMER_SECRET: process.env.CUSTOMER_SECRET
    },
};

export default nextConfig;
