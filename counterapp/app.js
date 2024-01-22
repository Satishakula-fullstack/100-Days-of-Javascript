const count = document.querySelector(".result");
const subBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");
const addBtn = document.getElementById("add");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor(count.innerHTML);
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = "0";
    setColor(count.innerHTML);
  } else {
    count.innerHTML++;
    setColor(count.innerHTML);
  }
});

function setColor(value) {
  if (value < 0) {
    count.style.color = "tomato";
  } else if (value > 0) {
    count.style.color = "yellow";
  } else {
    count.style.color = "white";
  }
}
