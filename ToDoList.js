function todoAdd() {
  const listEl = document.createElement("p");
  const taskText = document.createTextNode(
    document.getElementById("task").value
  );
  listEl.appendChild(taskText);
  document.getElementById("todoList").appendChild(listEl);
}
