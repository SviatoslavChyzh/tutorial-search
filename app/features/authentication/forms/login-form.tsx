import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useActionData, useSearchParams } from '@remix-run/react';
import type { ActionFunctionArgs } from '@remix-run/cloudflare';
import { validatePassword, validateUrl, validateUsername } from '@/features/authentication/helpers';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const redirectTo = safeRedirect(formData.get('redirectTo'), '/');
  const remember = formData.get('remember');

  if (!validateEmail(email)) {
    return json({ errors: { email: 'Email is invalid', password: null } }, { status: 400 });
  }

  if (typeof password !== 'string' || password.length === 0) {
    return json({ errors: { email: null, password: 'Password is required' } }, { status: 400 });
  }

  if (password.length < 8) {
    return json({ errors: { email: null, password: 'Password is too short' } }, { status: 400 });
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: 'Invalid email or password', password: null } },
      { status: 400 },
    );
  }

  return createUserSession({
    redirectTo,
    remember: remember === 'on' ? true : false,
    request,
    userId: user.id,
  });
};

export function LoginForm() {
  const [searchParams] = useSearchParams();
  const actionData = useActionData<typeof action>();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link to="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
