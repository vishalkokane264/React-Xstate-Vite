import { createMachine } from "xstate";

export const buyProduct = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCMCuBPACgJwPYVQGMAXAOmzAFsAxPSgYQENtiBiAEQFEAZTgFU4BtAAwBdRKAAOuWAEtis3ADsJIAB6IAtAHYAnABoQ6RACYAHAGYAvjcNL8cVWix4CJVdLkLlqjQk0AjCbahsb+AGy2IM44+ERklADWTCyclJLEYVIy8ooqSOqIACwmoYgBRcKkwjXCFsIArAHaDdpmQVExrvHkVLS4DMzEHjne+aB+RRak7SYNZQgBumakDbUBDXNmbbrCkVaGXXEkpIwQEHy4KcMFnrk+BX4N0w0NReHb80aI7as2NkA */
  id: "buyProduct",
  initial: "mkCartEmpty",
  context: {
    id: "001",
    title: "",
  },
  states: {
    mkCartEmpty: {
      on: {},
    },
    remFromCart: {
      on: {
        DELETE: {
          target: {
            id:
          },
        },
      },
    },
    addToCart: {},
  },
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAjACZ0AT0FDkU5EA */
});
