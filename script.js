let inputBox = document.querySelectorAll("input");

for (let input of inputBox) {
  input.addEventListener("mouseout", (event) => {
    if (event.target.value) {
      event.target.style.backgroundColor = "#e8f0fe";
    }
  });
}
