import { createSignal } from "solid-js";
import "./App.css";
import First from "./first";
import { trpc } from "./trpc";
import "./main.scss";

function App() {
  const [studentsData, setStudentsData] = createSignal<any[]>([]);

  async function get() {
    const res = await trpc.allStudents.query();
    setStudentsData(res);
  }

  get();

  console.log(studentsData());

  return (
    <div class="app-container">
      <First studentsData={studentsData()} />{" "}
    </div>
  );
}

export default App;
