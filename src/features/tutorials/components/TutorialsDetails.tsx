import { Avatar, Box, Button, Chip, Divider, Paper, Typography } from '@mui/material';
import { AccessTime, ArrowBack } from '@mui/icons-material';
import { Tutorial } from '../schemas/tutorials';

type TutorialDetailProps = {
  tutorial: Tutorial;
  onBack: () => void;
};

export default function TutorialDetail({ tutorial, onBack }: TutorialDetailProps) {
  return (
    <Box sx={{ my: 4 }}>
      <Button startIcon={<ArrowBack />} onClick={onBack} sx={{ mb: 2 }}>
        Back to search
      </Button>

      <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {tutorial.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={tutorial.author.avatar} alt={tutorial.author.name} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1">{tutorial.author.name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                {new Date(tutorial.publishedAt).toLocaleDateString()}
              </Typography>
              <AccessTime fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {tutorial.readTime} min read
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ my: 2 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {tutorial.language && <Chip label={tutorial.language} size="small" color="primary" />}
            {tutorial.framework && (
              <Chip label={tutorial.framework} size="small" color="secondary" />
            )}
            {tutorial.library && <Chip label={tutorial.library} size="small" color="info" />}
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1">{tutorial.description}</Typography>

          <Typography variant="body1">
            {tutorial.content || 'Full tutorial content would be displayed here.'}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
