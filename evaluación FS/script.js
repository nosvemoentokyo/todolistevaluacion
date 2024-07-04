/*Interacción JavaScript (50 puntos)
• Crear un archivo script js y vincularlo al archivo HTML. (5 puntos)
• Escribir una función JavaScript que agregue una tarea a la lista cuando se haga clic en el botón. (15 puntos)
• Agregar la funcionalidad para marcar una tarea como completada cuando se haga clic en ella. (15 puntos)
• Agregar la funcionalidad para eliminar una tarea de la lista. (15 puntos)*/

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", toggleTaskCompletion);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", deleteTask);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function toggleTaskCompletion(event) {
    const li = event.target;
    li.classList.toggle("completed");
}

function deleteTask(event) {
    const li = event.target.parentElement;
    taskList.removeChild(li);
}

addTaskBtn.addEventListener("click", addTask);