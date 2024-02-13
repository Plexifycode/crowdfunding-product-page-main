// jeżeli modal-pledge jest na display: none, to zmniejszasz margin-bottom dla modal-product-description
const backThisProjectBttn = document.querySelector(".back-this-project-button");
const modal = document.querySelector(".modal");
const shadow = document.querySelector(".shadow");
const closeBttn = document.querySelector(".modal-close");
const radioInput = document.querySelectorAll(".select-product");
const enterPledge = document.querySelectorAll(".modal-enter-pledge");
console.log(enterPledge);

backThisProjectBttn.addEventListener("click", () => {
  shadow.style.display = "block";
  modal.style.display = "block";

  closeBttn.addEventListener("click", () => {
    shadow.style.display = "none";
    modal.style.display = "none";
  });

  radioInput.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.add("active");
    });
  });
});

// modal pledge functionality
