import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {};

export default withSentryConfig(nextConfig, {
    org: "saintx",
    project: "portfolio",

    authToken: process.env.SENTRY_AUTH_TOKEN,

    silent: false,
});
