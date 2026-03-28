document.addEventListener("DOMContentLoaded", function() {

  const ageGate = document.getElementById("age-gate");
  const ageYes = document.getElementById("age-yes");
  const ageNo = document.getElementById("age-no");

  // Toon enkel als nog niet bevestigd
const stored = JSON.parse(localStorage.getItem("ageVerified"));

if (!stored || stored.expires < Date.now()) {
  ageGate.style.display = "flex";
}

  ageYes.addEventListener("click", function() {
    localStorage.setItem("ageVerified", JSON.stringify({
  value: true,
  expires: Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 dagen
}));
    ageGate.style.display = "none";
  });

 ageNo.addEventListener("click", function() {
  ageGate.innerHTML = `
    <div class="age-box">
      <h2>Sorry!</h2>
      <p>Deze website is enkel toegankelijk voor bezoekers van 18 jaar of ouder.</p>
    </div>
  `;
});


});


const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("#nav-menu a");

  // Toggle menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Sluit menu wanneer een link wordt aangeklikt
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });