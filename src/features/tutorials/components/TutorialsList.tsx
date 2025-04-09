import { Tutorial } from '@/features/tutorials/schemas/tutorials';
import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { Link } from 'react-router';

type TutorialsListProps = {
  tutorials: Array<Tutorial>;
};

export default function TutorialsList({ tutorials }: TutorialsListProps) {
  if (tutorials.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          No tutorials found. Try adjusting your search criteria.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {tutorials.map(tutorial => (
        <Grid size={4} key={tutorial.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="140"
              image={tutorial.thumbnailUrl}
              alt={tutorial.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {tutorial.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {tutorial.description}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {tutorial.categories.map(category => (
                  <Chip
                    key={category.id}
                    label={category.name}
                    size="small"
                    color={
                      category.type === 'language'
                        ? 'primary'
                        : category.type === 'framework'
                          ? 'secondary'
                          : 'default'
                    }
                  />
                ))}
              </Box>
            </CardContent>
            <Box sx={{ p: 2, pt: 0 }}>
              <Link to={`/tutorial/${tutorial.id}`} rel="noopener">
                Watch Tutorial
              </Link>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
