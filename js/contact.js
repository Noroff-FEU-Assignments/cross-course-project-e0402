const contactForm = document.querySelector("#contact");
const fullName = document.querySelector("#full-name");
const streetAddress = document.querySelector("#address");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const contactMessage = document.querySelector("#contact-message");
const contactFormError = document.querySelector("#contact-error");
const fullNameError = document.querySelector("#full-name-error");
const streetAddressError = document.querySelector("#address-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const contactMessageError = document.querySelector("#contact-message-error");

function formValidation() {
  event.preventDefault();

  if (checkLength(fullName.value, 6) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(contactMessage.value, 20) === true) {
    contactMessageError.style.display = "none";
  } else {
    contactMessageError.style.display = "block";
  }
}

contactForm.addEventListener("submit", formValidation);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchingPatterns = regEx.test(email);
  return matchingPatterns;
}
