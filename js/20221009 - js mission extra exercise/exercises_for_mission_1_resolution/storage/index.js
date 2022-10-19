// question 3
const saveSessionBtn = document.querySelector("#saveSession");
const loadSessionBtn = document.querySelector("#loadSession");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");

saveSessionBtn.addEventListener("click", handleSaveToSession);
loadSessionBtn.addEventListener("click", handleLoadFromSession);

function handleSaveToSession() {
  sessionStorage.setItem("firstName", firstName.value);
  sessionStorage.setItem("lastName", lastName.value);

  firstName.value = "";
  lastName.value = "";
}

function handleLoadFromSession() {
  const firstName = sessionStorage.getItem("firstName");
  const lastName = sessionStorage.getItem("lastName");
  if (firstName && lastName) {
    document.querySelector("#sessionData").innerHTML = `
        <div>First Name : ${firstName}</div>
        <div>Last Name : ${lastName}</div>
    `;
  }
}

// question 4
const addressForm = document.querySelector("#adreessForm");
const localLoadBtn = document.querySelector("#localLoad");
const addressData = document.querySelector("#addressData");

addressForm.addEventListener("submit", handleLocalSave);
addressForm.addEventListener("change", handleChange);
localLoadBtn.addEventListener("click", handleLocalLoad);

function handleLocalSave(event) {
  event.preventDefault();
  const address = getFormData(event);
  saveToStorage(address);
  event.target.reset();
}

function saveToStorage(address) {
  const addressStr = JSON.stringify(address);
  localStorage.setItem("address", addressStr);
}

function getFormData(event) {
  const address = {};
  new FormData(event.target).forEach((value, key) => {
    address[key] = value;
  });
  return address;
}

function handleLocalLoad() {
  const address = JSON.parse(localStorage.getItem("address"));
  addressData.innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${address.city}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${address.street}</h6>
    <p class="card-text">House Number: ${address.num}</p>
    <p class="card-text">Zip Code: ${address.zip}</p>
  </div>
</div> 
  `;
}

// question 5
function handleChange(event) {
  const item = event.target;
  const errorMessage = item.parentElement.querySelector(".errorMessage");
  if (item.value < 1) {
    item.classList.add("red-border");
    errorMessage.classList.remove("invisible");
  } else {
    item.classList.remove("red-border");
    errorMessage.classList.add("invisible");
  }
}

// Quesion 6
const body = document.querySelector("body");
const bgColorSelect = document.querySelector("#bgColor");
const bgColorStored = localStorage.getItem("bgColorSelect");

bgColorSelect.addEventListener("change", handleColorChange);

body.style.backgroundColor = bgColorStored;

function handleColorChange(event) {
  const value = event.target.value;
  if (value.length > 0) {
    localStorage.setItem("bgColorSelect", value);
    body.style.backgroundColor = value;
  }
}
