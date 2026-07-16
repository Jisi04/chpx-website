/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree endpoint the Contact form posts to — see .env.example. */
  readonly VITE_FORMSPREE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
