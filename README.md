![1](https://github.com/MohammedSalama/Cards/assets/32281997/66d085fb-6e8e-495c-84fe-fe5ddd30c696)
/**
 * Creates an element with the given name and age
 * @param {string} name - The name of the person
 * @param {number} age - The age of the person
 */
function element(name, age) {
  // create the elements
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const age = document.createElement("p");
  const img = document.createElement("img");

  // set the content
  const head = document.createTextNode(name);
  const ageContent = document.createTextNode(age);
  img.src = "src/img/1.jpg";
  title.appendChild(head);
  age.appendChild(ageContent);

  // set the styles
  card.style.width = "200px";
  img.style.width = "100%";
  card.style.background = "brown";
  card.style.color = "white";
  card.style.padding = "10px";
  card.style.margin = "2px";
  card.style.display = "inline-block";
  card.style.borderRadius = "5px";

  // add the elements
  card.appendChild(title);
  card.appendChild(age);
  card.appendChild(img);
  // return the card
  return card;
}
