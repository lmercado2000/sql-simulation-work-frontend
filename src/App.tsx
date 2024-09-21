import { createSignal } from "solid-js";
import "./App.css";
import First from "./first";
import { trpc } from "./trpc";
import "./main.scss";

function App() {
  const [count, setCount] = createSignal(0);
  async function get() {
    const res = await trpc.userList.query();
    console.log(res);
  }

  return <First />;
}

export default App;
