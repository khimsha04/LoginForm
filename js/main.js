const modalOpenBtn = document.querySelector("#button");
const myModal = document.querySelector(".my-modal");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.querySelector(".error-mail");
const errorPassword = document.querySelector(".error-password");
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
    modalOpenBtn.addEventListener("click", () => {
      openModal(".my-modal");
    });
  }
});

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
