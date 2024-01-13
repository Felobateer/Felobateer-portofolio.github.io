const skills = [
  {
    name: "HTML5",
    img: "icons/html5.png",
  },
  {
    name: "CSS3",
    img: "icons/css3.png",
  },
  {
    name: "JavaScript",
    img: "icons/js.png",
  },
  {
    name: "TypeScript",
    img: "icons/Typescript.png",
  },
  {
    name: "React",
    img: "icons/favicon.ico",
  },
  {
    name: "Angular",
    img: "icons/angular.png",
  },
  {
    name: "Vue.js",
    img: "icons/vue.png",
  },
  {
    name: "SASS & SCSS",
    img: "icons/sass.png",
  },
  {
    name: "Tailwind CSS",
    img: "icons/tailwind.png",
  },
  {
    name: "Bootstrap",
    img: "icons/bootstrap.png",
  },
  {
    name: "node.js",
    img: "icons/node.png",
  },
  {
    name: "express.js",
    img: "icons/expressjs.png",
  },
  {
    name: "Git",
    img: "icons/git.png",
  },
  {
    name: "MySQL",
    img: "icons/mysql.png",
  },
  {
    name: "jQuery",
    img: "icons/jquery.png",
  },
];

let itemsPerPage = 9;
let currentPage = 1;
const skillList = skills.map((skill) => skill);
const list = document.getElementById("skillList");
const Paginate = document.getElementById("pagination");

function displayPage(pageNumber) {
  list.innerHTML = "";
  var startIndex = (pageNumber - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  for (var i = startIndex; i < endIndex && i < skillList.length; i++) {
    var li = document.createElement("li");
    var text = document.createElement("p");
    var img = document.createElement("img");
    img.src = skillList[i].img;
    text.textContent = skillList[i].name;
    list.appendChild(li);
    li.appendChild(img);
    li.appendChild(text);
  }
}

function updatePagination() {
  Paginate.innerHTML = "";

  var totalPages = Math.ceil(skillList.length / itemsPerPage);
  for (var i = 1; i <= totalPages; i++) {
    var button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function () {
      currentPage = parseInt(this.textContent);
      displayPage(currentPage);
    });
    Paginate.appendChild(button);
  }
}

displayPage(currentPage);
updatePagination();
