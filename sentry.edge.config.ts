import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0f6e70ddab758da8fb7788c588e2f3b5@o4507533246922752.ingest.us.sentry.io/4507533249871872",
  tracesSampleRate: 1.0,
});