const email = document.getElementById("email");
const password = document.getElementById("password");

const modalOpenBtn = document.querySelector("#button");
const myModal = document.querySelector(".my-modal");

modalOpenBtn.addEventListener("click", () => {
  openModal(".my-modal");
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

enterButton.addEventListener("click", function () {
  isVallid = true;
  let emailValue = email.value;
  if (emailValue.length < 4) {
    email.style.borderBlockColor = "red";
    isVallid = false;
  }
});

function showErrorMessage(input) {
  let tagName = input.tagName;
  input.classList.add("invalid-border");
  if (tagName != "SELECT") {
    input.parentElement.children[0].classList.add("invalid");
    input.parentElement.children[2].classList.add("invalid");
    console.log(input.parentElement.children[0]);
  }
}
