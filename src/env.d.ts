/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_OUTSETA_EMAIL_LIST_URL: string;
  // Tiny Stack
  readonly REPLICA_URL: string;
  readonly REPLICA_BUCKET: string;
  readonly LITESTREAM_ACCESS_KEY_ID: string;
  readonly LITESTREAM_SECRET_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
