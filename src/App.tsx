import { useMachine } from "@xstate/react";
import myMachine from "./machines/firstMachine";
import { createActor } from "xstate";
import counterMachine from "./machines/counterMachine";

const CounterApp = () => {
  const [state, send] = useMachine(counterMachine);
  console.log(state);
  return (
    <div>
      <div>Count:{state.context.countValue}</div>
      <div>
        <button onClick={() => send({ type: "INC" })}>Increment</button>
        <button onClick={() => send({ type: "DECR" })}>Decrement</button>
      </div>
    </div>
  );
};

const SampleApp = () => {
  const countActor = createActor(myMachine).start();
  const [state, send] = useMachine(myMachine);
  // countActor.subscribe((state) => {
  //   console.log(state.value);
  // });
  return (
    <div>
      <pre>{state.value}</pre>
      <button onClick={() => send({ type: "MOUSEOVER" })}>Button1</button>
      <button onClick={() => send({ type: "MOUSEOUT" })}>Button2</button>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <SampleApp /> */}
      <CounterApp />
    </div>
  );
}
export default App;
