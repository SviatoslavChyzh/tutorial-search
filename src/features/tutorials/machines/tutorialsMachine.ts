import { assign, createMachine } from 'xstate';

export const tutorialsMachine = createMachine({
  id: 'tutorials',
  initial: 'idle',
  context: {
    status: 'idle',
    tutorials: [],
    filters: {
      query: '',
      languages: [],
      frameworks: [],
      libraries: [],
    },
  },
  states: {
    idle: {
      on: {
        SEARCH: {
          target: 'loading',
          actions: assign({
            filters: (_, event) => event.filters,
          }),
        },
      },
    },
    loading: {
      on: {
        STOP_TUTORIAL: 'idle',
      },
    },
    error: {
      on: {
        SEARCH: {
          target: 'loading',
          actions: assign({
            filters: (_, event) => event.filters,
          }),
        },
        RESET: {
          target: 'idle',
          actions: assign({
            filters: {
              query: '',
              languages: [],
              frameworks: [],
              libraries: [],
            },
            error: undefined,
          }),
        },
      },
    },
  },
});
