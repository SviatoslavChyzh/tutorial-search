import type { MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/router';
import { createClient } from '@libsql/client';
import { sessionTable, userTable } from '@db/schemas/authentication';
import { drizzle } from 'drizzle-orm/libsql';
import type { Env } from '../../worker-configuration';
import { buildLibsqlClient } from '@db/index';

export const meta: MetaFunction = () => {
  return [
    { title: 'Sviatoslav Chyzh | Full Stack Software Engineer' },
    {
      name: 'description',
      content:
        'Portfolio of Sviatoslav Chyzh, a full stack software engineer specializing in TypeScript and React. Explore my projects and experience.',
    },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare;
  // const { kv } = env;
  // await kv.put('remix', 'remix can access cloudflare kv');
  // const value = await kv.get('test');
  // console.log('at remix loader', kv);

  const client = buildLibsqlClient(env as Env);

  // const db = drizzle(turso, {
  //   schema: {
  //     user: userTable,
  //     session: sessionTable,
  //   },
  // });
  //
  // const [data] = await db.select().from(userTable);
  //
  // if (!data) {
  //   throw new Error('No data found');
  // }

  const result = await client.execute('SELECT * FROM user');

  console.log('result', result);

  return { data: result.rows };
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      Hello World myVar
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
