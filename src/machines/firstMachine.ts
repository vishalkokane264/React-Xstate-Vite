import { createMachine } from "xstate";

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EAVgkkJADgCMOgEwBOHQBYAzHuMB2AGwAaEAE9Ex545K3HQLtrRztbawszAF8o9zQsPEJSbHomVk5eAS4AFUkZJBAFJRU1DW0EWwsSHVtDCQjnSucJX3cvCqqauoamludDGNiQCgg4DXicAmINIuVVdQLygFozMx0SSONV2wDDM1sJCTM2xCWQjedjKycJHQtQs2sYuIxJpLIqWgZmCBnFOdKi1OTj8m22u32h2Onm8RhI1lMjh0NUe9ieQwmiWIJBS30gf2K8zKiB21hISJshmcFmsVOphmsJwQ92qZkcxkMFmM3KOFkMtkGUSAA */
  id: "machine1",
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: "notHovered",
        },
      },
    },
  },
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAtADZ0AT0FDkaEMXLVadAHQUsANzAAnSIxZtO3PogAsATkVCAHAHYArGMQWADIptT0syjXqLs7Feq0IHVYOLh4kEH4EIwAmewQARgBmEykpIA */
});

export default myMachine;
