// tabs info
let tabs = document.querySelectorAll(".tabs li"),
  divs = document.querySelectorAll(".contant > div");

let tabsarray = Array.from(tabs),
  divsarray = Array.from(divs);
// nav  left menu
var menuLeft = document.getElementById("cbp-spmenu-s1"),
  showLeft = document.getElementById("showLeft");

showLeft.onclick = function () {
  classie.toggle(this, "active");
  classie.toggle(menuLeft, "cbp-spmenu-open");
};

// nav mobile
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos < 600) {
    document.querySelector(".upbar").style.top = "0";
    document.querySelector(".upbar-tow").style.marginTop = "58px";
    document.querySelector(".upbar-tow").style.backgroundColor = "transparent";
  } else {
    document.querySelector(".upbar").style.top = "-50px";
    document.querySelector(".upbar-tow").style.margin = "0";
    document.querySelector(".upbar-tow").style.backgroundColor = "#3c3e8b";
  }
  prevScrollpos = currentScrollPos;
};

// Taps
tabsarray.forEach((item) => {
  item.addEventListener("click", (e) => {
    tabsarray.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsarray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.con);
    document.querySelector(e.currentTarget.dataset.con).style.display = "block";
  });
});
