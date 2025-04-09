// import { assign, setup } from 'xstate';
// import { Tutorial } from '@/features/tutorials/schemas/tutorials';
//
// export type SearchInputMachineEvent =
//   | {
//       type: 'IDLE';
//     }
//   | {
//       type: 'CHANGE';
//       value: string;
//     }
//   | {
//       type: 'BLUR';
//     }
//   | {
//       type: 'FOCUS';
//     }
//   | {
//       type: 'DISABLE';
//     }
//   | {
//       type: 'ENABLE';
//     }
//   | {
//       type: 'REPORT_INVALID';
//       reason: string;
//     };
//
// export type SearchInputMachineState = {
//   status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
//   tutorials: Array<Tutorial>;
//   filters: {
//     query: string;
//     languages: Array<string>;
//     frameworks: Array<string>;
//     libraries: Array<string>;
//   };
//   error: string | null;
// };
//
// export const tutorialsMachine = setup({
//   types: {
//     context: {} as SearchInputMachineState,
//     events: {} as SearchInputMachineEvent,
//   },
// }).createMachine({
//   id: 'tutorials',
//   initial: 'IDLE',
//   context: {
//     status: 'IDLE',
//     tutorials: [],
//     filters: {
//       query: '',
//       languages: [],
//       frameworks: [],
//       libraries: [],
//     },
//     error: null,
//   },
//   states: {
//     idle: {
//       on: {
//         SEARCH: {
//           target: 'searching',
//           actions: assign({
//             filters: (_, event: { filters: typeof context.filters } | undefined) => event.filters,
//           }),
//         },
//       },
//     },
//     searching: {
//       on: {
//         STOP_TUTORIAL: 'idle',
//       },
//     },
//     error: {
//       on: {
//         SEARCH: {
//           target: 'loading',
//           actions: assign({
//             filters: (_, event) => event.filters,
//           }),
//         },
//         RESET: {
//           target: 'idle',
//           actions: assign({
//             filters: {
//               query: '',
//               languages: [],
//               frameworks: [],
//               libraries: [],
//             },
//             error: undefined,
//           }),
//         },
//       },
//     },
//   },
// });
