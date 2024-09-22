import { createSignal } from "solid-js";
import "./App.css";
import First from "./first";
import { RouterOutput, trpc } from "./trpc";
import "./main.scss";

function App() {
  const [studentsData, setStudentsData] = createSignal<
    RouterOutput["allStudents"]
  >([]);

  async function get() {
    const res = await trpc.allStudents.query();
    setStudentsData(res);
  }

  get();

  return (
    <div class="app-container">
      <First studentsData={studentsData()} />{" "}
    </div>
  );
}

export default App;
