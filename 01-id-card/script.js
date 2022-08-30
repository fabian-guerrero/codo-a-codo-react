window.onload = function () {
  var theme = localStorage.getItem("data-theme");
  if (theme == "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (theme == "") {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("checkbox").checked = true;
  }

  var timeline = new TimelineMax();
  timeline
    .from(".card-wrapper", { y: -100, autoAlpha: 0 }, 0.5)
    .from(".card-image-wrapper", { y: -50, autoAlpha: 0 }, 1)
    .from(".name", { y: -50, autoAlpha: 0 }, 1.2)
    .from(".position", { y: -50, autoAlpha: 0 }, 1.4)
    .from(".description", { y: -50, autoAlpha: 0 }, 1.6)
    .from(".mailto-link", { y: -50, autoAlpha: 0 }, 1.8)
    .from(".social-networks", { y: -50, autoAlpha: 0 }, 2);
};

function toggle(a) {
  if (a.checkbox.checked == true) {
    document.documentElement.classList.add("transition");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  } else if (a.checkbox.checked == false) {
    document.documentElement.classList.add("transition");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  }
}
