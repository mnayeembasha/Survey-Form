let inputBox = document.querySelectorAll("input");

for (let input of inputBox) {
  input.addEventListener("mouseout", (event) => {
    if (event.target.value) {
      event.target.style.backgroundColor = "#e8f0fe";
    }
  });
}

let name = document.querySelector("#name");
let email = document.querySelector("#email");

function generatePara(innerTxt) {
  let p = document.createElement("p");
  p.innerHTML = innerTxt;
  p.classList.add("para");
  return p;
}

let nameErrorMsg = generatePara(
  "username should contain alpha-numeric characters only!"
);
function validateName() {
  let nameVal = document.querySelector("#name").value;
  let regex = /^([A-Za-z0-9]+)$/;
  if (!regex.test(nameVal)) {
    name.style.border = "4px solid red";
    name.parentElement.parentElement.appendChild(nameErrorMsg);
  } else {
    if (nameErrorMsg.parentElement === name.parentElement.parentElement) {
      name.parentElement.parentElement.removeChild(nameErrorMsg);
    }
    name.style.border = "4px solid green";
  }
}

let emailErrorMsg = generatePara("Please Enter valid email id!");
function validateEmail() {
  let emailVal = document.querySelector("#email").value;
  let regex = /^([A-Za-z0-9]+)@[a-z]+[\.][a-z]{2,3}([\.][a-z]{2})?$/;
  if (!regex.test(emailVal)) {
    email.style.border = "4px solid red";
    email.parentElement.parentElement.appendChild(emailErrorMsg);
  } else {
    if (emailErrorMsg.parentElement === email.parentElement.parentElement) {
      email.parentElement.parentElement.removeChild(emailErrorMsg);
    }
    email.style.border = "4px solid green";
  }
}

name.addEventListener("input", validateName);
email.addEventListener("change", validateEmail);
