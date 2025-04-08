import { Tutorial, tutorialsSchema } from '@/features/tutorials/schemas/tutorials';
import { z } from 'zod';
import useSWR, { Fetcher } from 'swr';

async function getTutorialById(id: string) {
  const response = await fetch(`/${id}.json`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  try {
    tutorialsSchema.parse(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(error.issues);
    }
  }

  return await response.json();
}

const fetcher: Fetcher<Tutorial, string> = id => getTutorialById(id);

export default function useTutorialById(id: string) {
  const { data, isLoading, error } = useSWR('/api/tutorials?id=' + id, fetcher);

  return {
    tutorial: data,
    isLoading,
    error,
  };
}
