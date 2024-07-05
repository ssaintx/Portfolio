import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a9970694f22e141e7c0a553f64f6c340@o4507533246922752.ingest.us.sentry.io/4507548541190144",

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
