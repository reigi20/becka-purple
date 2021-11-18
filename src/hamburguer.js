window.onload = function () {
  //Elemento del DOM button
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  //Listener
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
};
