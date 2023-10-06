let name = "Luke";
let size = 10;

for (let step = 0; Step < 100; step++) {
  let textBox = document.createElement("p");
  textBox.innerHTML = name;
  textBox.style.fonSize = size + "px";
  document.body.appendChild(textBox);
  size += size;
}

//click button to change background colour
document.querySelector("button").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
