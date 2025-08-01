import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod/v4';

export const env = createEnv({
  server: {
    // Database
    DATABASE_URL: z.string().startsWith('postgresql://'),
    // Auth
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.string().url(),
    // GitHub OAuth
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    // Rate limiting
    UNKEY_ROOT_KEY: z.string().min(1).optional(),
    // Discord webhook
    DISCORD_WEBHOOK_URL: z.string().url().optional(),
    // Node environment
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  },
  experimental__runtimeEnv: process.env,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION || process.env.NODE_ENV === 'test',
});


