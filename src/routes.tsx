import { createBrowserRouter } from 'react-router';
import RootComponent from '@/routes/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
  },
]);
