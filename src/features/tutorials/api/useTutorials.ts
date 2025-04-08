import useSWR from 'swr';
import { Tutorial, TutorialSearch } from '@/features/tutorials/schemas/tutorials';
import { buildApiUrl } from '@/features/tutorials/utils/buildApiUrl';

const fetcher = async (url: string): Promise<Array<Tutorial>> => {
  console.log(url);

  const response = await fetch('/tutorials.json');

  if (!response.ok) {
    throw new Error('Failed to fetch tutorials');
  }

  return response.json();
};

export function useTutorials(filters: TutorialSearch) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(buildApiUrl(filters), fetcher);

  return {
    tutorials: data || [],
    isLoading,
    isValidating,
    isError: !!error,
    error,
    mutate,
  };
}
