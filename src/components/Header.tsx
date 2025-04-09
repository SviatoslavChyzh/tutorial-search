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
import { Link } from 'react-router';

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
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Tutorial Search
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              to="https://github.com/SviatoslavChyzh/tutorial-search"
              target="_blank"
              rel="noopener"
              data-screenshot="github-link"
              aria-label="GitHub"
            >
              <Box sx={{ border: '1px solid white', borderRadius: 2 }}>
                <IconButton>
                  <img src="/GithubLogo.svg" width={30} height={30} alt="Github Logo" />
                </IconButton>
              </Box>
            </Link>
            <Box sx={{ border: '1px solid', borderRadius: 2 }}>
              <IconButton
                data-screenshot="toggle-mode"
                onClick={() => setMode(darkMode ? 'light' : 'dark')}
              >
                {icon}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
