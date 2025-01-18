function todoList(todos) {
  const div = document.querySelector("#content");
  const list = document.createElement("ul");
  div.appendChild(list);

  todos.forEach((todoo) => {
    const li = document.createElement("li");
    li.textContent = todoo.todo;
    li.style.cursor = "pointer";
    list.appendChild(li);
    li.addEventListener("click", (e) => {
      if (e.target.style.textDecoration === "underline") {
        e.target.style.textDecoration = "none";
        e.target.style.color = "black";
        e.target.style.backgroundColor = "white";
        e.target.style.fontWeight = "normal";
        e.target.textContent = todoo.todo;
      } else {
        e.target.style.textDecoration = "underline";
        e.target.style.color = "green";
        e.target.style.backgroundColor = "lightgrey";
        e.target.style.fontWeight = "bold";
        e.target.textContent = e.target.textContent + " (done)";
        e.target.textContent = e.target.textContent + "✅";
      }
    });
  });
}
const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
