// const inputTask = document.getElementById("task-input");
// const addBtn = document.getElementById("add-btn");
// const list = document.getElementById("task-list");

// let tasks = [];

// function saveTasks() {
//     localStorage.setItem("task", JSON.stringify(tasks));
// }

// function addTask() {
//     // console.log(inputTask.value);

//     if (inputTask.value.trim() !== "") {
//         const text = inputTask.value.trim();
//         tasks.push({ text: text, done: false });
//         saveTasks();
//         const li = document.createElement("li");

//         const taskText = document.createElement("span");
//         taskText.textContent = inputTask.value.trim();
//         taskText.classList.add("task-text");
//         li.appendChild(taskText);

//         // btn done
//         const doneBtn = document.createElement("button");
//         doneBtn.classList.add("btn-done");
//         doneBtn.textContent = "Hoàn thành";
//         li.appendChild(doneBtn);

//         doneBtn.addEventListener("click", function () {
//             li.classList.toggle("done");
//         });

//         // btn remove
//         const removeBtn = document.createElement("button");
//         removeBtn.classList.add("btn-remove");
//         removeBtn.textContent = "Xoá";
//         li.appendChild(removeBtn);

//         removeBtn.addEventListener("click", function () {
//             li.remove();
//         });

//         list.appendChild(li);
//         inputTask.value = "";
//     }
// }

// addBtn.addEventListener("click", addTask);

// inputTask.addEventListener("keydown", function (e) {
//     if (e.key === "Enter") {
//         addTask();
//     }
// });

const inputTask = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask(task) {
    const li = document.createElement("li");
    if (task.done) {
        li.classList.add("done");
    }

    const taskTest = document.createElement("span");
    taskTest.textContent = task.text;
    taskTest.classList.add("task-text");
    li.appendChild(taskTest);

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Hoàn thành";
    doneBtn.classList.add("btn-done");
    li.appendChild(doneBtn);

    doneBtn.addEventListener("click", function () {
        task.done = !task.done;
        li.classList.toggle("done");
        saveTasks();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Xoá";
    removeBtn.classList.add("btn-remove");
    li.appendChild(removeBtn);

    removeBtn.addEventListener("click", function () {
        tasks = tasks.filter(function (t) {
            return t !== task;
        });

        li.remove();
        saveTasks();
    });
    list.appendChild(li);
}

function addTask() {
    const text = inputTask.value.trim();
    if (text !== "") {
        const task = { text: text, done: false };
        tasks.push(task);
        saveTasks();
        renderTask(task);
        inputTask.value = "";
    }
}

addBtn.addEventListener("click", addTask);

inputTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

tasks.forEach(renderTask);
