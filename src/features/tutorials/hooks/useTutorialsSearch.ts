import { useMachine } from '@xstate/react';
import { tutorialsMachine } from '../machines/tutorialsMachine';
import { useTutorials } from '@/features/tutorials/api/useTutorials';
import { useEffect } from 'react';
import { TutorialSearch } from '@/features/tutorials/schemas/tutorials';

export function useTutorialsSearch() {
  const [state, send] = useMachine(tutorialsMachine);
  const { tutorials, isLoading, isError, error } = useTutorials(state.context.filters);

  useEffect(() => {
    if (state.matches('loading') && !isLoading && tutorials) {
      send({ type: 'LOADED', tutorials });
    }

    if (state.matches('loading') && isError) {
      send({ type: 'ERROR', message: error?.message || 'An error occurred' });
    }
  }, [tutorials, isLoading, isError, error, send, state]);

  const searchTutorials = (filters: TutorialSearch) => {
    send({ type: 'SEARCH', filters });
  };

  const resetSearch = () => {
    send({ type: 'RESET' });
  };

  return {
    tutorials: state.context.tutorials,
    status: state.context.status,
    filters: state.context.filters,
    error: state.context.error,
    searchTutorials,
    resetSearch,
    isIdle: state.matches('idle'),
    isLoading: state.matches('loading'),
    isSuccess: state.matches('success'),
    isError: state.matches('error'),
  };
}
