const toggleInput = document.querySelector(".toggle__input");
const toggleLabel = document.querySelector(".toggle__label");
const container = document.querySelector(".container");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const transaction = document.querySelector(".transaction");
const balance = document.querySelector(".balance");
const spending = document.querySelector(".spending");
const accountImageBox = document.querySelector(".image-box");
const transactionItems = document.querySelectorAll(".transaction__item");
const mainContainer = document.querySelector(".main__container");
const formBtn = document.querySelector(".form__btn");
const formUser = document.querySelector(".form__username");
const formPass = document.querySelector(".form__password");
const accName = document.querySelector(".account__name");
const formGroupLogin = document.querySelector(".form__group--login");

const data = [
  {
    firstName: "Joseph",
    last: "Aniebuo",
    gender: "male",
    country: "Nigeria",
    username: "josephaniebuo",
    password: "2222",
  },
  {
    firstName: "Samuel",
    last: "Hillary",
    gender: "male",
    country: "Hungary",
    username: "samuelhillary",
    password: "3333",
  },
];

const logUser = function () {
  const user = data.find((user) => user.username === formUser.value);

  if (user.password === formPass.value) {
    main.style.display = "flex";
    accName.textContent = user.last;
    formGroupLogin.style.visibility = "hidden";
  }
};

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  logUser();
});

const nightMode = function () {
  if (toggleInput.checked) {
    container.classList.remove("dark-mode-no-shadow");
    mainContainer.classList.remove("dark-mode");
    main.classList.remove("dark-mode-no-shadow");
    nav.classList.remove("dark-mode");
    transaction.classList.remove("dark-mode-no-shadow");
    balance.classList.remove("dark-mode");
    spending.classList.remove("dark-mode");
    dashboard.classList.remove("dark-mode-no-shadow");
    accountImageBox.style.color = "rgba(0, 0, 0, 0.6)";

    for (items of transactionItems) {
      items.classList.remove("dark-mode");
    }
  } else {
    container.classList.add("dark-mode-no-shadow");
    mainContainer.classList.add("dark-mode");
    main.classList.add("dark-mode-no-shadow");
    nav.classList.add("dark-mode");
    transaction.classList.add("dark-mode-no-shadow");
    balance.classList.add("dark-mode");
    spending.classList.add("dark-mode");
    dashboard.classList.add("dark-mode-no-shadow");
    accountImageBox.style.color = "white";

    for (items of transactionItems) {
      items.classList.add("dark-mode");
    }
  }
};

toggleLabel.addEventListener("click", function () {
  nightMode();
});
