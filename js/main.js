document.addEventListener("DOMContentLoaded", function () {
  fetch("menu.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("menu-container").innerHTML = data;

      setupSectionHighlight();
    });

  function setupSectionHighlight() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Remueve la clase active de todos los links
        navLinks.forEach((l) => l.classList.remove("active"));
        // Agrega la clase active al link clickeado
        link.classList.add("active");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));

            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(
              `.nav-links a[href="#${id}"]`
            );
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px", // ajusta el momento en que se activa
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
});
