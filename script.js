var accordion = document.getElementsByClassName("accordion__toggle");
var i;
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener("click",function() {
    this.classList.toggle("active");
    var accordionPanel = this.nextElementSibling;
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  });
}
function classToggle() {
  const navs = document.querySelectorAll('.nav__links')

  navs.forEach(nav => nav.classList.toggle('nav__toggleShow'));
}
document.querySelector('.nav__toggler')
  .addEventListener('click', classToggle);
