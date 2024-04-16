// active
const panelActive = document.querySelectorAll(".panel");

panelActive.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removePanelActive();
    panel.classList.add("active");
  });
});

function removePanelActive() {
  panelActive.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
// active2
const activeH3 = document.querySelectorAll("h3");
const activeP = document.querySelectorAll("p");
// هنگام استفاده از tagName با تگ حروف بزرگ استفاده میکنیم
document.onclick = function (e) {
  if (e.target.tagName !== "H3" && e.target.tagName !== "P") {
    activeH3.forEach(function (h3) {
      h3.classList.remove("active2");
    });
    activeP.forEach(function (p) {
      p.classList.remove("active2");
    });
  }
};

activeH3.forEach(function (h3) {
  h3.onclick = function () {
    h3.classList.toggle("active2");
    const correspondingP = h3.parentElement.querySelector("p");
    correspondingP.classList.toggle("active2");
  };
});

// toggle Btn

const toggleBtn = document.querySelector("#toggle");
const sideBar = document.querySelector("#sidebar");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("active3");
  sideBar.classList.toggle("active3");
});

document.addEventListener("click", function (e) {
  if (e.target.id !== "toggle" && e.target.id !== "sidebar") {
    toggleBtn.classList.remove("active3");
    sideBar.classList.remove("active3");
  }
});

// ?????with onclick event

// toggleBtn.onclick = function () {
//   toggleBtn.classList.toggle("active3");
//   sideBar.classList.toggle("active3");
// };

// document.onclick = function (e) {
//   if (e.target.id !== "toggle" && e.target.id !== "sidebar") {
//     toggleBtn.classList.remove("active3");
//     sideBar.classList.remove("active3");
//   }
// };

// ??????    for with class
// document.onclick = function (e) {
//   if (!e.target.classList.contains("TOGGLE") && !e.target.classList.contains("SIDEBAR")) {
//     toggleBtn.classList.remove("active3");
//     sideBar.classList.remove("active3");
//   }
// };
