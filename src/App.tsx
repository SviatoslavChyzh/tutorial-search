import './App.css';
import RouterRootProvider from '@/providers/RouterProvider';
import ThemeAppProvider from '@/providers/ThemeProvider';

function App() {
  return (
    <ThemeAppProvider>
      <RouterRootProvider />
    </ThemeAppProvider>
  );
}

export default App;
