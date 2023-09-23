/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
/* Hover Properties Fix */
  document.addEventListener("DOMContentLoaded", function () {
      const button = document.getElementById("changeButton");
      let colorsChanged = false;

      button.addEventListener("click", function () {
          const body = document.body;
          const links = document.querySelectorAll(".hover-effect");

          if (colorsChanged) {
              body.classList.remove("black");
              links.forEach(link => {
                  link.style.color = "gold";
              });
          } else {
              body.classList.add("black");
              links.forEach(link => {
                  link.style.color = "white";
              });
          }

          colorsChanged = !colorsChanged;
      });
  });
/* Dark/Light Mode */
  document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changeButton");
  let isDarkMode = false;

  button.addEventListener("click", function () {
      const body = document.body;

      if (isDarkMode) {
          // Switch to light mode
          body.classList.remove("black");
          button.classList.remove("light-mode");
          button.classList.add("dark-mode");
          button.innerHTML = "🌙<br>Dark";
      } else {
          // Switch to dark mode
          body.classList.add("black");
          button.classList.remove("dark-mode");
          button.classList.add("light-mode");
          button.innerHTML = "☀️<br>Light";
      }

      isDarkMode = !isDarkMode;
  });
});
/* Form Data */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      if (!name || !email || !message) {
          alert("please fill in all fields.");
          return;
      }
      contactForm.reset();
  });
});
