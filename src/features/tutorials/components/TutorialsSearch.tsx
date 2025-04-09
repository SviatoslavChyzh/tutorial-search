import { Alert, Box, CircularProgress, Container, Typography } from '@mui/material';
import SearchFiltersComponent from './SearchFilters';
import TutorialsList from './TutorialsList';
import { useTutorials } from '@/features/tutorials/api/useTutorials';
import { useState } from 'react';
import { TutorialFilters } from '../schemas/tutorials';

export default function TutorialsSearch() {
  const [filters, setFilters] = useState<TutorialFilters>({
    query: '',
    languages: [],
    frameworks: [],
    libraries: [],
  });
  const { tutorials, isLoading, isError, error } = useTutorials(filters);

  function searchTutorials(filters: TutorialFilters) {
    setFilters(filters);
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 12 }}>
        <SearchFiltersComponent
          initialFilters={filters}
          onSearch={searchTutorials}
          isLoading={isLoading}
        />

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {isError && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error || 'An error occurred while fetching tutorials.'}
          </Alert>
        )}

        {tutorials && <TutorialsList tutorials={tutorials} />}

        {tutorials.length === 0 && (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="body1">Use the filters above to search for tutorials.</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
