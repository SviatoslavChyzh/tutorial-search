import { CssBaseline, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import theme from '@/theme';

export default function ThemeAppProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
