function sendFirstName(event) {
  event.preventDefault();
  let firstNameInput = document.querySelector("#first-name-input");
  let errorMessage = document.querySelector("#first-name-error-message");

  if (firstNameInput.value == "" || firstNameInput.value == " ") {
    errorMessage.innerHTML = "First Name cannot be empty";
    document.getElementById("first-name-error-icon").style.display = "block";
    document.getElementById(
      "first-name-input"
    ).placeholder = ` Please, add your First Name`;
    document.getElementById("first-name-input").className =
      document.getElementById("first-name-input").className + " red-border";
    document.getElementById("first-name-input").className = document
      .getElementById("first-name-input")
      .className.replace(" green-border", "");
    errorMessage.className = errorMessage.className + " error-margins";
    return false;
  } else {
    errorMessage.innerHTML = "";
    document.getElementById("first-name-error-icon").style.display = "none";
    document.getElementById("first-name-input").className =
      document.getElementById("first-name-input").className + " green-border";
    document.getElementById("first-name-input").className = document
      .getElementById("first-name-input")
      .className.replace(" red-border", "");
    errorMessage.className = errorMessage.className - " error-margins";
    return true;
  }
}

function sendLastName(event) {
  event.preventDefault();
  let lastNameInput = document.querySelector("#last-name-input");
  let errorMessage = document.querySelector("#last-name-error-message");

  if (lastNameInput.value == "" || lastNameInput.value == " ") {
    errorMessage.innerHTML = "Last Name cannot be empty";
    document.getElementById("last-name-error-icon").style.display = "block";
    document.getElementById(
      "last-name-input"
    ).placeholder = ` Please, add your Last Name`;
    document.getElementById("last-name-input").className =
      document.getElementById("last-name-input").className + " red-border";
    document.getElementById("last-name-input").className = document
      .getElementById("last-name-input")
      .className.replace(" green-border", "");
    errorMessage.className = errorMessage.className + " error-margins";
    return false;
  } else {
    errorMessage.innerHTML = "";
    document.getElementById("last-name-error-icon").style.display = "none";
    document.getElementById("last-name-input").className =
      document.getElementById("last-name-input").className + " green-border";
    document.getElementById("last-name-input").className = document
      .getElementById("last-name-input")
      .className.replace(" red-border", "");
    errorMessage.className = errorMessage.className - " error-margins";
    return true;
  }
}

function sendPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  let errorMessage = document.querySelector("#password-error-message");

  if (passwordInput.value == "" || passwordInput.value == " ") {
    errorMessage.innerHTML = "Password cannot be empty";
    document.getElementById("password-error-icon").style.display = "block";
    document.getElementById(
      "password-input"
    ).placeholder = ` Please, add your Password`;
    document.getElementById("password-input").className =
      document.getElementById("password-input").className + " red-border";
    document.getElementById("password-input").className = document
      .getElementById("password-input")
      .className.replace(" green-border", "");
    errorMessage.className = errorMessage.className + " error-margins";
    return false;
  } else {
    errorMessage.innerHTML = "";
    document.getElementById("password-error-icon").style.display = "none";
    document.getElementById("password-input").className =
      document.getElementById("password-input").className + " green-border";
    document.getElementById("password-input").className = document
      .getElementById("password-input")
      .className.replace(" red-border", "");
    errorMessage.className = errorMessage.className - " error-margins";
    return true;
  }
}

function sendEmail(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let errorMessage = document.querySelector("#email-error-message");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    errorMessage.innerHTML = "";
    document.getElementById("email-error-icon").style.display = "none";
    document.getElementById("email-input").className =
      document.getElementById("email-input").className + " green-border";
    document.getElementById("email-input").className = document
      .getElementById("email-input")
      .className.replace(" red-border", "");
    errorMessage.className = errorMessage.className - " error-margins";
    return true;
  } else {
    errorMessage.innerHTML = "Looks like this is not a valid email address";
    document.getElementById("email-error-icon").style.display = "block";
    document.getElementById(
      "email-input"
    ).placeholder = `Please, add your Email Address`;
    document.getElementById("email-input").className =
      document.getElementById("email-input").className + " red-border";
    document.getElementById("email-input").className = document
      .getElementById("email-input")
      .className.replace(" green-border", "");
    errorMessage.className = errorMessage.className + " error-margins";
    return false;
  }
}

function submitFrom(event) {
  event.preventDefault();
  if (
    sendFirstName(event) == true &&
    sendLastName(event) == true &&
    sendEmail(event) == true &&
    sendPassword(event) == true
  ) {
    let formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = `<h2>Thank you for signing up!</h2>
 <p class="subscribe-text"> We sent an email with the details. <br /> Please, confirm your email address. </p>`;
    return true;
  } else {
    return false;
  }
}

let firstName = document.querySelector("#first-name-input");
firstName.addEventListener("input", sendFirstName);

let lastName = document.querySelector("#last-name-input");
lastName.addEventListener("input", sendLastName);

let password = document.querySelector("#password-input");
password.addEventListener("input", sendPassword);

let email = document.querySelector("#email-input");
email.addEventListener("input", sendEmail);

let form = document.querySelector("#form");
form.addEventListener("submit", submitFrom);
