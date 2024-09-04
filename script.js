function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  const burger = document.querySelector(".burger");
  const heroContainer = document.querySelector(".hero-container");
  const myLogo = document.querySelector(".logo");

  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
  heroContainer.classList.toggle("active");
  myLogo.classList.toggle("active");

  heroContainer.classList.toggle("mactive");
  myLogo.classList.toggle("mactive");
  burger.classList.toggle("mactive");
}
