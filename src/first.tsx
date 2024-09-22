import { createSignal } from "solid-js/types/server/reactive.js";

export default function First() {
  //   const studentType = createSignal<string>("m");

  return (
    <div class="main-body">
      <div class="content-container">
        <img src="/src/assets/logo.svg" class="bg-logo" alt="logo" />
        <div class="students-list">
          <p class="header">name</p>
          <ul>
            <li>
              <div>
                <span class="s-badge m">M</span>
                <p>Miller</p>
              </div>
            </li>
            <li>
              <div>
                <span class="s-badge m">M</span>
                <p>Eagle</p>
              </div>
            </li>
            <li>
              <div>
                <span class="s-badge m">M</span>
                <p>Cabbage</p>
              </div>
            </li>
            <li>
              <div>
                <span class="s-badge">F</span>
                <p>Peccary</p>
              </div>
            </li>
            <li>
              <div>
                <span class="s-badge">F</span>
                <p>Ostrich</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="student-picture">
          <img src="/src/assets/E-M-2.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
