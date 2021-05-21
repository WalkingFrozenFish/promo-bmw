const moreElem = document.querySelectorAll(".more");
const modalElem = document.querySelector(".modal");

for (let i = 0; i < moreElem.length; i++) {
    moreElem[i].addEventListener("click", () => {
        modalElem.classList.remove("hidden");
    })
}
// const openModal = () => {
//     modalElem.classList.remove("hidden");
// };

// moreElem.addEventListener("click", openModal);

const closeModal = () => {
    modalElem.classList.add("hidden");
};

modalElem.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("overlay") ||
        target.classList.contains("modal__close")) {
            closeModal();
        }
});

