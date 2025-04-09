import { Box, Button, Chip, Container, Divider, Paper, Stack, Typography } from '@mui/material';
import { AccessTime, ArrowBack, Person } from '@mui/icons-material';
import useTutorialById from '@/features/tutorials/api/useTutorialById';
import { useNavigate, useParams } from 'react-router';

export default function TutorialsDetails() {
  const navigate = useNavigate();
  const params = useParams();

  const { tutorial, isLoading, error } = useTutorialById(params.tutorialId!);

  if (isLoading) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1">Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1">Error: {error.message}</Typography>
      </Box>
    );
  }

  if (!tutorial) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1">Tutorial not found.</Typography>
      </Box>
    );
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mb: 2 }}>
          Back to search
        </Button>
        <Paper elevation={2} sx={{ p: 0, borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ width: '100%', height: 0, paddingBottom: '56.25%', position: 'relative' }}>
            <iframe
              src={tutorial.url}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={tutorial.title}
            />
          </Box>

          <Box sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {tutorial.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Person sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body1">{tutorial.author}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTime sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body1">{tutorial.videoDuration}</Typography>
              </Box>
            </Box>

            <Stack direction="row" spacing={1} sx={{ mb: 3 }} flexWrap="wrap" gap={1}>
              {tutorial.language && <Chip label={tutorial.language} size="small" color="primary" />}
              {tutorial.framework && (
                <Chip label={tutorial.framework} size="small" color="secondary" />
              )}
              {tutorial.library && <Chip label={tutorial.library} size="small" color="info" />}
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body1">{tutorial.description}</Typography>

            <Button
              variant="outlined"
              color="primary"
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 2 }}
            >
              Watch on YouTube
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
