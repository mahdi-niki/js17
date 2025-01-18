// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const wrapper = document.querySelector(".cards");
const cardSelected = document.querySelector(".cardSelected");

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:

data.forEach((person) => {
  const card = document.createElement("article");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = person.src;

  const p = document.createElement("p");
  p.textContent = person.title;

  const accountImage = document.createElement("img");
  accountImage.src = person.accountImage;

  const account = document.createElement("p");
  account.textContent = person.account;

  const button = document.createElement("button");
  button.textContent = "please bid";

  card.append(image, p, accountImage, account, button);
  wrapper.append(card);

  button.addEventListener("click", () => {
    cardSelected.textContent = person.title;
  });

  //-------------style card----------------
  card.style.backgroundColor = "#6f1768d1";
  card.style.width = "300px";
  card.style.height = "400px";
  card.style.border = "1px solid #ccc";
  card.style.borderRadius = "10px";
  card.style.margin = "10px";
  card.style.padding = "10px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.justifyContent = "center";
  image.style.width = "100%";
  image.style.height = "200px";
  image.style.objectFit = "cover";
  image.style.borderRadius = "10px";
  p.style.fontSize = "20px";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  accountImage.style.width = "50px";
  accountImage.style.height = "50px";
  accountImage.style.borderRadius = "50%";
  accountImage.style.objectFit = "cover";
  account.style.fontSize = "16px";
  account.style.fontWeight = "bold";
  account.style.textAlign = "center";
  button.style.width = "100px";
  button.style.height = "40px";
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.margin = "10px";
  button.style.fontSize = "10px";
});

cardSelected.textContent = "Click on a card to select it";

//-------------------style .card------------

wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";
wrapper.style.backgroundColor = "#1b0b3fd1";
wrapper.style.padding = "20px";
wrapper.style.borderRadius = "10px";
wrapper.style.margin = "10px";
wrapper.style.width = "100%";
wrapper.style.height = "100vh";
wrapper.style.overflow = "auto";
wrapper.style.boxShadow = "0 0 10px #ccc";
wrapper.style.border = "3px solid #ccc";

//-------------------style .cardSelected------------

cardSelected.style.backgroundColor = "pink";
cardSelected.style.width = "300px";
cardSelected.style.height = "100px";
cardSelected.style.border = "1px solid #ccc";
cardSelected.style.borderRadius = "10px";
cardSelected.style.margin = "10px";
cardSelected.style.padding = "10px";
cardSelected.style.display = "flex";
cardSelected.style.alignItems = "center";
cardSelected.style.justifyContent = "center";
cardSelected.style.fontSize = "20px";
cardSelected.style.fontWeight = "bold";

//-------------------------style body----------------

const body = document.querySelector("body");
body.style.backgroundColor = "#0b0b3f";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100vh";
cardSelected.style.fontSize = "20px";
cardSelected.style.fontWeight = "bold";
