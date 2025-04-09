import { createBrowserRouter } from 'react-router';
import RootComponent from '@/routes/Root';
import TutorialsDetailsPage from '@/routes/TutorialsDetailsPage';
import Home from '@/routes/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootComponent,
    children: [
      { index: true, Component: Home },
      {
        path: 'tutorial/:tutorialId',
        Component: TutorialsDetailsPage,
      },
    ],
  },
]);
