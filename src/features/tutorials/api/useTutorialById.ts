import { Tutorial, tutorialsSchema } from '@/features/tutorials/schemas/tutorials';
import { z } from 'zod';
import useSWR, { Fetcher } from 'swr';

async function getTutorialById(id: string): Promise<{ data: Tutorial }> {
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

const fetcher: Fetcher<{ data: Tutorial }, string> = id => {
  return getTutorialById(id);
};

export default function useTutorialById(id: string) {
  const { data, isLoading, error } = useSWR(id, fetcher);

  return {
    tutorial: data?.data || null,
    isLoading,
    error,
  };
}
