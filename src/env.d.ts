/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_OUTSETA_EMAIL_LIST_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
