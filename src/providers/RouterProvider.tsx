import { RouterProvider } from 'react-router';
import { router } from '@/routes';

export default function RouterRootProvider() {
  return <RouterProvider router={router} />;
}
