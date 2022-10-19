const form = document.querySelector("form");
const errorMessage = document.querySelector("#errorMessage");

form.addEventListener("submit", handleSubmit);

// set the first input on focus.
document.querySelector("input").focus();

function handleSubmit(event) {
  const formData = extractFormData(event);
  const validation = dataValidation(formData);

  if (validation.isValid) {
    // using the submit function in order to send the data
    event.submit();
    event.target.reset();
    errorMessage.innerHTML = "";
  } else {
    // we only preventDefault if the form is not valid
    event.preventDefault();
    errorMessage.innerHTML = validation.message;
  }
}

function extractFormData(event) {
  const data = {};
  const formData = new FormData(event.target);
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
}

function dataValidation(data) {
  // check if data is null
  if (!data) {
    return setValidation(false, "Invalid data");
  }

  //check reqiuerd fields
  if (!data.firstName || !data.lastName) {
    return setValidation(false, "First Name and  Last Name are required");
  }

  // check char length
  for (key in data) {
    // min 2 char
    if (data[key].length < 2) {
      return setValidation(false, `${key}: Insert at least 2 chars`);
    }
    // message max 500 chars
    if (key == "message") {
      if (data[key].length > 500) {
        return setValidation(false, "Message can be only 500 chars");
      }
      //   all other inputs max 30 chars
    } else if (data[key].length > 30) {
      return setValidation(false, `${key}: value can be only 30 chars`);
    }
  }

  return setValidation(true);
}

function setValidation(isValid, message) {
  return {
    isValid,
    message,
  };
}
