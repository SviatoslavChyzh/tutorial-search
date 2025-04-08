import './App.css';
import RouterRootProvider from '@/providers/RouterProvider';
import SWRConfigProvider from '@/providers/SWRConfigProvider';
import ThemeAppProvider from '@/providers/ThemeProvider';

function App() {
  return (
    <SWRConfigProvider>
      <ThemeAppProvider>
        <RouterRootProvider />
      </ThemeAppProvider>
    </SWRConfigProvider>
  );
}

export default App;
