const imgBox = document.querySelector(".imgBox");
const boxes = document.getElementsByClassName("box");

// dragable elements
// when you start dragging

imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " border";

  setTimeout(() => {
    e.target.className += " hide";
  }, 0); // if we give 0 then it run at last
});

// when you drop dragging
imgBox.addEventListener("dragend", (e) => {
  e.target.className = " imgBox";
});

// loop for all boxes

for (box of boxes) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("dragenter", (e) => {
    e.target.className += " enter";
  });

  box.addEventListener("dragleave", (e) => {
    e.target.className += " leave";
  });

  box.addEventListener("drop", (e) => {
    e.target.append(imgBox);
  });
}
