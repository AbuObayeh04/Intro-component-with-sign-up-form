let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("pass");

const styleError = `color: #f00; display: block; text-align: right; font-size: 12px ; margin-top : 5px; letter-spacing : 1.25px;`;

window.onload = function () {
  [firstName, lastName, email, password].forEach((input) => (input.value = ""));
};

function clearErrors() {
  document.querySelectorAll("#error").forEach(function (elements) {
    elements.remove();
  });

  [firstName, lastName, email, password].forEach(
    (input) => (input.style.borderColor = "")
  );

  document
    .querySelectorAll("#error-sign")
    .forEach((element) => element.remove());
}

function validateInput() {
  let valid = true;

  if (firstName.value === "") {
    showError(firstName, "First Name Can't be empty");
    valid = false;
  }
  if (lastName.value === "") {
    showError(lastName, "Last Name Can't be empty");
    valid = false;
  }
  if (password.value === "") {
    showError(password, "Password Can't be empty");
    valid = false;
  }
  if (email.value === "") {
    showError(email, "Looks like this not an email");
    email.setAttribute("placeholder", "email@example/com");
    email.classList.add("error");
    valid = false;
  }
  return valid;
}

function showError(input, message) {
  input.style.borderColor = "#f00";
  input.setAttribute("placeholder", "");

  // create the error and its message
  let span = document.createElement("span");
  span.id = "error";
  span.style = styleError;
  span.textContent = message;
  input.parentNode.append(span);

  // create an errorSing
  let errorSign = document.createElement("span");
  errorSign.id = "error-sign";
  errorSign.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: hsl(0, 100%, 74%);"></i>`;
  input.parentNode.append(errorSign);
}

document.forms[0].onsubmit = function (event) {
  event.preventDefault();

  clearErrors();

  if (validateInput()) {
    document.forms[0].submit();
  }
};
