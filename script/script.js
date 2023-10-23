document.getElementById("amongus").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("menu-active");
});

const navItem = document.querySelectorAll(".navigation-link");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    for (let j = 0; j < navItem.length; j++) {
      navItem[j].classList.remove("navigation-link--active");
    }
    navItem[i].classList.add("navigation-link--active");
  });
}
