import { useMachine } from "@xstate/react";
import myMachine from "./machines/firstMachine";
import { createActor } from "xstate";
function App() {
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
}
export default App;
