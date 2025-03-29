import type { MetaFunction } from '@remix-run/cloudflare';
import Navbar from '@/components/navbar/navbar';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

// export const loader = ({ context }: LoaderFunctionArgs) => {
//   const { env, cf, ctx } = context.cloudflare;
//   env.MY_BINDING; // Access bound resources here
//   // ... more loader code here...
// };

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Navbar />
    </div>
  );
}
