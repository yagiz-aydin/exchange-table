import Router from "./utils/router";
import { ActionProvider } from "./context/action";

export function App() {
  return (
    <ActionProvider>
      <Router />
    </ActionProvider>
  );
}

export default App;
