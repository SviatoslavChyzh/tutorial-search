import { Tutorial, TutorialFilters } from '@/features/tutorials/schemas/tutorials';
import { buildApiUrl } from '@/features/tutorials/utils/buildApiUrl';
import useSWR from 'swr';

const fetcher = async (url: string): Promise<{ data: Array<Tutorial> }> => {
  console.log(url);

  const response = await fetch('/tutorials.json');

  if (!response.ok) {
    throw new Error('Failed to fetch tutorials');
  }

  return response.json();
};

export function useTutorials(filters: TutorialFilters) {
  const { data, error, isLoading, isValidating, mutate } = useSWR(buildApiUrl(filters), fetcher);

  return {
    tutorials: data?.data || [],
    isLoading,
    isValidating,
    isError: !!error,
    error,
    mutate,
  };
}
