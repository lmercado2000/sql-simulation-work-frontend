import { createSignal, For } from "solid-js";
import clsx from "clsx";

const [hoveringMale, setHoveringMale] = createSignal<boolean>(false);

type StudentItemProps = {
  name: string;
  male?: boolean;
};

function StudentItem({ name, male }: StudentItemProps) {
  return (
    <li onMouseEnter={() => setHoveringMale(male ?? false)}>
      <div>
        <span class={clsx("s-badge", male && "m")}>{male ? "M" : "F"}</span>
        <p>{name}</p>
      </div>
    </li>
  );
}

export default function First(props) {
  return (
    <div class="main-body">
      <div class="content-container">
        <img src="/src/assets/logo.svg" class="bg-logo" alt="logo" />
        <div class="students-list">
          <p class="header">name</p>
          <ul>
            <For each={props.studentsData}>
              {(student) => (
                <StudentItem name={student.first_name} male={student.sex} />
              )}
            </For>
          </ul>
        </div>
        <div class="student-picture">
          <img
            src={`/src/assets/${hoveringMale() ? "E-M-2.png" : "E-F-2.png"}`}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
