document.addEventListener("DOMContentLoaded", function () {
  fetch("menu.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("menu-container").innerHTML = data;

      // Activar IntersectionObserver después de cargar el menú
      observeSections();
    });

  function observeSections() {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
});
