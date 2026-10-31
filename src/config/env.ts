const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '');

export const APP_URL = trimTrailingSlash(
  import.meta.env.VITE_APP_URL ?? 'https://app.jahitstatus.com'
);

export const LANDING_URL = trimTrailingSlash(
  import.meta.env.VITE_LANDING_URL ?? 'https://jahitstatus.com'
);
