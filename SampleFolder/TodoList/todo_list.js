const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const node = taskInput.value.trim();
    if (node === "") return;

    //tasks.push(node);
    tasks.push({text:node})
    taskInput.value = "";

    //renderTemplate();
    displayTasks();
}

/*function renderTemplate() {
    taskList.innerHTML = ""; // clear existing list

    tasks.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        taskList.appendChild(li);
    });
}*/

function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTask(){
    tasks=tasks.filter(task=>!task.completed);
    displayTasks();
}
