const message = document.getElementById("message");
const reset = document.getElementById("reset");
reset.addEventListener("click", (event) => {
  message.innerText = "";
});
const submit = document.getElementById("submit");
submit.addEventListener("click", handleFormSubmit);

function isCardExpired(exp) {
  return new Date() > new Date(exp);
}

function isCvvMatchExpectedPattern(value) {
  return /^[0-9]{3,4}/.test(value);
}

function isCardNumberMatchExpectedPattern(value) {
  return /^[0-9]{13,16}/.test(value);
}

function isCardNumberValid(cnumber) {
  return false; // TODO Implement me!
}

function handleFormSubmit(event) {
  event.preventDefault();

  const cnumber = document.getElementById("cnumber").value;
  if (!cnumber) {
    message.innerText = "You must enter Card Number";
    return false;
  }

  if (!isCardNumberMatchExpectedPattern(cnumber)) {
    message.innerText = "Card number must be 13 to 16 digits!";
    return false;
  }

  const exp = document.getElementById("expiration").value;
  if (!exp) {
    message.innerText = "You must enter Expiration date";
    return false;
  }

  if (isCardExpired(exp)) {
    message.innerText = "Your card is expired!";
    return false;
  }

  const cvv = document.getElementById("cvv").value;
  if (!exp) {
    message.innerText =
      "You must enter the CVV Number (Card Verification Value)";
    return false;
  }

  if (!isCvvMatchExpectedPattern(cvv)) {
    message.innerText = "CVV must be 3 or 4 digits!";
    return false;
  }

  if (!isCardNumberValid(cnumber)) {
    message.innerText = "Invalid card number!";
    return false;
  }

  reset.click();
  message.innerText = "Thanks for the payment!";
  return true;
}
