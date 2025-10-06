const dropdownBtn = document.querySelector('#partner-dropdown .dropdown-btn');
const dropdownContent = document.querySelector('#partner-dropdown .dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('open');
});


// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Formspree alert
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if(response.ok) {
        alert("Tak for din besked! Vi vender tilbage hurtigst muligt.");
        form.reset();
      } else {
        alert("Der skete en fejl. Prøv igen senere.");
      }
    })
    .catch(error => {
      alert("Der skete en fejl. Prøv igen senere.");
      console.error(error);
    });
  });
});
