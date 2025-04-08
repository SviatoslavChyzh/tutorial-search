import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useColorScheme,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';

export default function Header() {
  const { mode, systemMode, setMode } = useColorScheme();
  const darkMode = false;

  const resolvedMode = (systemMode || mode) as 'light' | 'dark';
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />,
  }[resolvedMode];

  return (
    <AppBar position="fixed">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tutorial Search
          </Typography>
          <Box sx={{ border: '1px solid', borderRadius: 2 }}>
            <IconButton
              data-screenshot="toggle-mode"
              onClick={() => setMode(darkMode ? 'light' : 'dark')}
            >
              {icon}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
