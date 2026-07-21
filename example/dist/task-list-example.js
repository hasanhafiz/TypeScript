const ulList = document.getElementById("task-list");
const input = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const exportButton = document.getElementById("export-task");
let tasks = [];
let nextId = 1;
function createSampleTask() {
    const samples = [
        { id: 1, title: "PHP", completed: true },
        { id: 2, title: "Javascript", completed: true },
        { id: 3, title: "jQuery", completed: true },
        { id: 4, title: "TypeScript", completed: false },
        { id: 5, title: "ReactJS", completed: false },
        { id: 6, title: "Laravel", completed: true },
    ];
    // console.log(samples);
    samples.forEach((sample) => {
        tasks.push({ id: sample.id, title: sample.title, completed: sample.completed });
    });
}
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
        nextId++;
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
    console.log(nextId);
    tasks.push({ id: nextId++, title: taskTitle, completed: false });
}
// <li class="task-item completed">
//   <input class="form-check-input" type="checkbox" checked>
//   <span class="task-text">Buy groceries</span>
// </li>    
createSampleTask();
renderTask();
console.log(tasks);
export {};
//# sourceMappingURL=task-list-example.js.map