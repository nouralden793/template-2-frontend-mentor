let navP = Array.from(document.querySelectorAll(".navbar p"));
let navTextP = Array.from(document.querySelectorAll(".nav p"));
let divs = Array.from(document.querySelectorAll(".container > div"));
let texts = Array.from(document.querySelectorAll(".detal .text"));
let bulletsLis = Array.from(document.querySelectorAll(".bullets li"));
let crewTexts = Array.from(document.querySelectorAll(".crew .text"));
let techLis = Array.from(document.querySelectorAll(".technology .navBar li"));
let techTexts = Array.from(
  document.querySelectorAll(".technology .textCont .text")
);
let destinationImg = document.querySelector(
  ".destination .container .image img"
);
let TechImg = document.querySelector(".technology .container .image img");
let crewImage = document.querySelector(".crew .container .image img");
let burgerIcon = document.querySelector(".burger");
let background = document.querySelector(".background");
let exploreBtn = document.querySelector(".home .container button");

burgerIcon.addEventListener("click", (e) => {
  document.querySelector(".navbar").classList.toggle("appear-flex");
});

function addBackground() {
  navP.forEach((p) => {
    if (p.classList.contains("activeNavBar")) {
      if (p.dataset.name == ".home") {
        background.style.background =
          "url(./images/background-home-desktop.jpg)";
      } else if (p.dataset.name == ".destination") {
        background.style.background =
          "url(./images/background-destination-desktop.png)";
      } else if (p.dataset.name == ".crew") {
        background.style.background =
          "url(./images/background-crew-desktop.png)";
      } else {
        background.style.background =
          "url(./images/background-technology-desktop.png)";
      }
    }
  });
}

addBackground();

navP.forEach((p) => {
  p.addEventListener("click", function () {
    navP.forEach((p) => {
      p.classList.remove("activeNavBar");
    });
    p.classList.add("activeNavBar");
    addBackground();
    divs.forEach((div) => {
      div.classList.remove("appear");
    });
    document.querySelector(p.dataset.name).classList.add("appear");
    setTimeout(() => {
      document.querySelector(".navbar").classList.toggle("appear-flex");
    }, 10);
  });
});

navTextP.forEach((p) => {
  p.addEventListener("click", function () {
    navTextP.forEach((p) => {
      p.classList.remove("activeNavText");
    });
    addImage(p.textContent);
    p.classList.add("activeNavText");
    texts.forEach((text) => {
      text.classList.remove("activeText");
    });
    document.querySelector(p.dataset.text).classList.add("activeText");
  });
});

function addImage(text) {
  if (text == "Moon") {
    destinationImg.src = "./images/image-moon.png";
  } else if (text == "Mars") {
    destinationImg.src = "./images/image-mars.png";
  } else if (text == "Europa") {
    destinationImg.src = "./images/image-europa.png";
  } else {
    destinationImg.src = "./images/image-titan.png";
  }
}

bulletsLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    bulletsLis.forEach((li) => {
      li.classList.remove("activeBullet");
    });
    addCrewImage(li.dataset.num);
    e.target.classList.add("activeBullet");
    crewTexts.forEach((div) => {
      div.classList.remove("activeText");
    });
    document.querySelector(e.target.dataset.num).classList.add("activeText");
  });
});

function addCrewImage(num) {
  if (num == ".first") {
    crewImage.src = "./images/image-douglas-hurley.png";
  } else if (num == ".second") {
    crewImage.src = "./images/image-mark-shuttleworth.png";
  } else if (num == ".third") {
    crewImage.src = "./images/image-victor-glover.png";
  } else if (num == ".fourth") {
    crewImage.src = "./images/image-anousheh-ansari.png";
  }
}

techLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    techLis.forEach((li) => {
      li.classList.remove("active");
    });
    addTechImage(e.target.dataset.technologytext);
    e.target.classList.add("active");
    techTexts.forEach((div) => {
      div.classList.remove("active");
    });
    document
      .querySelector(e.target.dataset.technologytext)
      .classList.add("active");
  });
});

function addTechImage(num) {
  if (num == ".fir") {
    TechImg.src = "./images/image-launch-vehicle-portrait.jpg";
  } else if (num == ".sec") {
    TechImg.src = "./images/image-spaceport-portrait.jpg";
  } else if (num == ".thir") {
    TechImg.src = "./images/image-space-capsule-portrait.jpg";
  }
}

exploreBtn.addEventListener("click", () => {
  background.style.background =
    "url(./images/background-destination-desktop.png)";

  navP.forEach((p) => {
    p.classList.remove("activeNavBar");
  });
  document
    .querySelector(".navbar p:nth-child(3)")
    .classList.add("activeNavBar");
  divs.forEach((div) => {
    div.classList.remove("appear");
  });
  document.querySelector(".destination").classList.add("appear");
});
