const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  const currentScroll = window;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      currentScroll >= sectionTop - 50 &&
      currentScroll < sectionTop + sectionHeight - 50
    ) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
});
