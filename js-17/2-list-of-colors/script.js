function listOfColours(colours) {
  const content = document.querySelector("div");
  const select = document.createElement("select");
  const p = document.createElement("p");
  content.append(select, p);

  colours.forEach((color) => {
    const option = document.createElement("option");
    option.textContent = color;
    select.appendChild(option);
  });
  select.addEventListener("change", (e) => {
    p.textContent = `You have selected: ${e.target.value}`;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
