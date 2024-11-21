import { type Client as LibsqlClient, createClient } from '@libsql/client/web';
import type { Env } from '../worker-configuration';

export function buildLibsqlClient(env: Env): LibsqlClient {
  const url = env.DATABASE_URL?.trim();
  if (url === undefined) {
    throw new Error('TURSO_URL env var is not defined');
  }

  const authToken = env.TURSO_AUTH_TOKEN?.trim();
  if (authToken == undefined) {
    throw new Error('TURSO_AUTH_TOKEN env var is not defined');
  }

  return createClient({ url, authToken });
}
