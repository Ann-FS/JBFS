const form = document.querySelector("form");
const requierdFields = ["firstName", "lastName", "message"];

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = getFormData(event);
  const validation = validateData(data);
  if (!validation.isValid) {
    handleError(validation);
  } else {
    form.submit();
  }
}

function handleError(validation) {
  const item = document.querySelector(`#${validation.item}`);
  item.classList.add("bg-error");
  alert(`${validation.item} is required`);
}

function getFormData(event) {
  const data = {};
  const formData = new FormData(event.target);
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
}

function validateData(data) {
  if (Object.keys(data).length < 1) {
    return setValidation(false);
  }
  for (item in data) {
    if (requierdFields.indexOf(item) > -1 && data[item].length < 1) {
      return setValidation(false, item);
    }
  }
  return setValidation(true);
}

function setValidation(isValid = false, item) {
  return {
    isValid,
    item,
  };
}
