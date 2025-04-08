import { TutorialSearch } from '@/features/tutorials/schemas/tutorials';

export const buildApiUrl = (filters: TutorialSearch): string => {
  const queryParams = new URLSearchParams();

  if (filters.query) {
    queryParams.append('query', filters.query);
  }

  if (filters.languages.length > 0) {
    filters.languages.forEach(lang => {
      queryParams.append('languages', lang);
    });
  }

  if (filters.frameworks.length > 0) {
    filters.frameworks.forEach(framework => {
      queryParams.append('frameworks', framework);
    });
  }

  if (filters.libraries.length > 0) {
    filters.libraries.forEach(library => {
      queryParams.append('libraries', library);
    });
  }

  return `/api/tutorials?${queryParams.toString()}`;
};
