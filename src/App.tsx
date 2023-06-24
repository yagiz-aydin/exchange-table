import Router from "./utils/router";
import {ActionProvider} from "./context";

export function App() {
  return <ActionProvider><Router /></ActionProvider>;
}

export default App;
