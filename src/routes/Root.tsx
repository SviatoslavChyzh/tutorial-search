import Header from '@/components/Header';
import { Outlet } from 'react-router';

export default function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
