document
.querySelector(".contact-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  alert(
    "Thank you for applying to NeuroForge. We'll contact you shortly."
  );

});
