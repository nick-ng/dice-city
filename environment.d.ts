declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      REDIS_URL: string;
      PORT: string;
    }
  }
}

export {};
