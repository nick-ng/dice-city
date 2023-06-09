/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly API_ORIGIN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
