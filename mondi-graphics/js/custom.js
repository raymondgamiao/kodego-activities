//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let servicesbutton = document.getElementById("btn-services");

//testing yung wala muna sana sila pag mag load ang page
window.onload = (event) => {
/*   servicesbutton.style.display = "none"; */
  mybutton.style.display = "none";
};

// When the user scrolls down 20px from the top of the document, show the buttons
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
/*     servicesbutton.style.display = "block"; */
  } else {
    mybutton.style.display = "none";
/*     servicesbutton.style.display = "none"; */
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}