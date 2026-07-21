import { tasks } from "./seed";
import { getNextId } from "./seed";
import { createSampleTask } from "./seed";
const ulList = document.getElementById("task-list");
const input = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const exportButton = document.getElementById("export-task");
function renderTask() {
    ulList.innerHTML = "";
    tasks.forEach((task) => {
        // nextId = 1;
        // now add the to the html list
        const li = document.createElement("li");
        li.className = "task-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            // task.completed = !task.completed;
            task.completed = checkbox.checked;
        });
        const span = document.createElement("span");
        span.className = "task-next";
        span.textContent = task.title;
        li.append(checkbox, span);
        ulList.append(li);
        getNextId();
    });
}
exportButton.addEventListener('click', () => {
    console.log(tasks);
});
addTaskButton.addEventListener('click', () => {
    addTask(input.value);
    input.value = "";
    input.focus();
});
function addTask(taskTitle) {
    tasks.push({ id: getNextId(), title: taskTitle, completed: false });
}
// <li class="task-item completed">
//   <input class="form-check-input" type="checkbox" checked>
//   <span class="task-text">Buy groceries</span>
// </li>    
createSampleTask();
renderTask();
console.log(tasks);
//# sourceMappingURL=script.js.map