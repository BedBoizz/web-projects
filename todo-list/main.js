const inputTask = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

function addTask() {
    // console.log(inputTask.value);

    if (inputTask.value.trim() !== "") {
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = inputTask.value.trim();
        taskText.classList.add("task-text");
        li.appendChild(taskText);

        // btn done
        const doneBtn = document.createElement("button");
        doneBtn.classList.add("btn-done");
        doneBtn.textContent = "Hoàn thành";
        li.appendChild(doneBtn);

        doneBtn.addEventListener("click", function () {
            li.classList.toggle("done");
        });

        // btn remove
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("btn-remove");
        removeBtn.textContent = "Xoá";
        li.appendChild(removeBtn);

        removeBtn.addEventListener("click", function () {
            li.remove();
        });

        list.appendChild(li);
        inputTask.value = "";
    }
}

addBtn.addEventListener("click", addTask);

inputTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
