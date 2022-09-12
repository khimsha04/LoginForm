const modalOpenBtn = document.querySelector("#button");
const myModal = document.querySelector(".my-modal");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.querySelector(".error-mail");
const errorPassword = document.querySelector(".error-password");
const updatePassword = document.querySelector(".updatepassword");
const dontwork = document.querySelector(".dontwork");
const blackButton = document.querySelector(".black");
const body = document.querySelector(".body");

blackButton.addEventListener("click", function () {
  body.classList.add("bodyblack");
});

updatePassword.addEventListener("click", function () {
  dontwork.style.display = "block";
});
console.log(errorPassword);
modalOpenBtn.addEventListener("click", function () {
  let isVallid = true;
  let emailValue = email.value;
  let passwordValue = password.value;

  if (emailValue.length < 4) {
    errorEmail.style.display = "block";
    isVallid = false;
  }
  if (passwordValue.length < 2) {
    errorPassword.style.display = "block";
    isVallid = false;
  }
  if (isVallid) {
    finishModal();
  }
});
function finishModal() {
  modalOpenBtn.addEventListener("click", () => {
    openModal(".my-modal");
  });
}
function openModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.add("visible");

  const closeBtn = modalNode.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    closeModal(modalSelector);
  });
}
function closeModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove("visible");
}
