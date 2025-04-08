import Header from '@/components/Header';
import TutorialsSearch from '@/features/tutorials/components/TutorialsSearch';

export default function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <TutorialsSearch />
      </main>
    </>
  );
}
