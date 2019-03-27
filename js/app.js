const container = document.querySelector(".container");
container.addEventListener(
  "scroll",
  function(e) {
    let navbar = document.getElementById("navbar");
    let links = document.querySelectorAll(".link");
    let logo = document.querySelector(".logo");
    if (container.scrollTop >= 100) {
      navbar.style.height = "3.5rem";
      logo.style.height = "1.5rem";
      links.forEach(x => (x.style.fontSize = "14px"));
    } else {
      navbar.style.height = "5rem";
      logo.style.height = "3rem";
      links.forEach(x => (x.style.fontSize = "16px"));
    }
  },
  false
);
