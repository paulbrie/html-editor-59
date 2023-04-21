// scroll events based

const wheelPosSpan = document.getElementById("wheelPos");
let offsetY = 0;
console.log(wheelPosSpan);

function updateOffsetY() {
  offsetY = window.scrollY;
  wheelPosSpan.innerText = offsetY;
  if (offsetY > 100) {
    disableScroll();
  }
  console.log("update");
}

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

window.addEventListener("wheel", updateOffsetY);

window.addEventListener("scroll", updateOffsetY);
