import { useTutorialsSearch } from '@/features/tutorials/hooks/useTutorialsSearch';
import { Alert, Box, CircularProgress, Container, Typography } from '@mui/material';
import SearchFiltersComponent from './SearchFilters';
import TutorialsList from './TutorialsList';

export default function TutorialsSearch() {
  const { tutorials, filters, status, error, searchTutorials, resetSearch, isLoading } =
    useTutorialsSearch();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tutorial Search
        </Typography>

        <SearchFiltersComponent
          initialFilters={filters}
          onSearch={searchTutorials}
          onReset={resetSearch}
          isLoading={isLoading}
        />

        {status === 'loading' && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {status === 'error' && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error || 'An error occurred while fetching tutorials.'}
          </Alert>
        )}

        {status === 'success' && <TutorialsList tutorials={tutorials} />}

        {status === 'idle' && (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="body1">Use the filters above to search for tutorials.</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
