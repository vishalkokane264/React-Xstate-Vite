import { assign, createMachine } from "xstate";

const increment = (contextObj: { context: { countValue: number } }) => {
  return contextObj.context.countValue + 1;
};
const decrement = (contextObj: { context: { countValue: number } }) =>
  contextObj.context.countValue - 1;
export const counterMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoBDZbASwDcwBiASQDkBhAbQAYBdRUAB1VjPKpMXEAA9EAVgAsBAOysAzAEYATBIA0IAJ6Ils2QSkTlagL6nNaLLkIlyVagBEAoowBKbTkhC9+g4d7iCNJyiqoa2ogAHEoEEuYWIJioEHAiVjj4Ir4CZEIiQQC0Spo6CIUAbOaWGJm2pJRg2Xy5+YGIUrKliCqyUYasFWYJQA */
  id: "counter",
  context: {
    countValue: 0,
  },
  initial: "active",
  states: {
    active: {
      on: {
        INC: {
          actions: assign({ countValue: increment }),
        },
        DECR: {
          actions: assign({ countValue: decrement }),
        },
      },
    },
  },
});
export default counterMachine;
