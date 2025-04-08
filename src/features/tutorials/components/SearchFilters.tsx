import { TutorialSearch } from '@/features/tutorials/schemas/tutorials';
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const LANGUAGES = ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C#'];
const FRAMEWORKS = ['React', 'Vue', 'Angular', 'Next.js', 'Express', 'Django', 'Spring Boot'];
const LIBRARIES = ['Redux', 'React Query', 'SWR', 'XState', 'Material-UI', 'Tailwind CSS', 'Axios'];

type SearchFiltersProps = {
  initialFilters: TutorialSearch;
  onSearch: (filters: TutorialSearch) => void;
  onReset: () => void;
  isLoading: boolean;
};

export default function SearchFiltersComponent({
  initialFilters,
  onSearch,
  onReset,
  isLoading,
}: SearchFiltersProps) {
  const { control, handleSubmit, reset } = useForm<TutorialSearch>({
    defaultValues: initialFilters,
  });

  const onSubmit: SubmitHandler<TutorialSearch> = data => {
    onSearch(data);
  };

  const handleReset = () => {
    reset({
      query: '',
      languages: [],
      frameworks: [],
      libraries: [],
    });
    onReset();
  };

  return (
    <Paper component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Find Tutorials
      </Typography>

      <Controller
        name="query"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Search"
            variant="outlined"
            sx={{ mb: 3 }}
            placeholder="Search by title, description or creator..."
          />
        )}
      />

      <Divider sx={{ mb: 3 }} />

      <Typography variant="subtitle1" gutterBottom>
        Filter by:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 3 }}>
        <Controller
          name="languages"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              multiple
              options={LANGUAGES}
              value={value}
              onChange={(_, newValue) => onChange(newValue)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option} {...getTagProps({ index })} color="primary" />
                ))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Languages"
                  placeholder="Select languages"
                />
              )}
              sx={{ flex: 1 }}
            />
          )}
        />

        <Controller
          name="frameworks"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              multiple
              options={FRAMEWORKS}
              value={value}
              onChange={(_, newValue) => onChange(newValue)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option} {...getTagProps({ index })} color="secondary" />
                ))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Frameworks"
                  placeholder="Select frameworks"
                />
              )}
              sx={{ flex: 1 }}
            />
          )}
        />

        <Controller
          name="libraries"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              multiple
              options={LIBRARIES}
              value={value}
              onChange={(_, newValue) => onChange(newValue)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip label={option} {...getTagProps({ index })} />)
              }
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Libraries"
                  placeholder="Select libraries"
                />
              )}
              sx={{ flex: 1 }}
            />
          )}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined" onClick={handleReset} disabled={isLoading} type="button">
          Reset
        </Button>
        <Button type="submit" variant="contained" disabled={isLoading}>
          Search
        </Button>
      </Box>
    </Paper>
  );
}
