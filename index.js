const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cardText = button.closest(".card-text");
    const shortText = cardText.querySelector(".short-text");
    const moreText = cardText.querySelector(".more-text");

    const isExpanded = moreText.style.display === "inline";

    moreText.style.display = isExpanded ? "none" : "inline";
    button.textContent = isExpanded ? "Read more" : "Read less";
  });
});

const technologies = [
  ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React Router"],
  ["Context API", "Bootstrap ", "Tailwind CSS", "Node.js", "MongoDB"],
  ["Git", "GitHub", "Vercel", "NPM", "Express.js"],
  ["REST API", "CRUD operations", "JWT", "Postman", "TypeScript"],
];

// Get the container where we will insert the rows
const techListContainer = document.getElementById("tech-list");

// Loop through the technologies and generate the HTML
technologies.forEach((group) => {
  let column = document.createElement("div");
  column.classList.add("col-md-3", "mb-4", "px-5");

  let ul = document.createElement("ul");
  ul.classList.add("list-unstyled");

  group.forEach((tech) => {
    let li = document.createElement("li");
    li.classList.add(
      // "fw-semibold",
      "rounded-3",
      "gap-x-4",
      // "d-inline-block",
      "px-3",
      "py-1",
      "mb-2"
    );
    li.style.backgroundColor = "#e8eaed";
    li.style.color = "#000";
    li.textContent = tech;
    ul.appendChild(li);
  });

  column.appendChild(ul);
  techListContainer.appendChild(column);
});
