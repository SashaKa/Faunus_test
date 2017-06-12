
const popup = document.querySelector(".modal-content")
const close = document.querySelector(".modal__close-button")
const closeOverlay = document.querySelector(".modal-overlay")
const overlay = document.querySelector(".modal-overlay")




document.addEventListener("mouseleave", ( ) => {
        console.log('mouse leave outside');
        popup.classList.add("show-modal-content");
        popup.classList.add("show-animation");
        overlay.classList.add("modal-overlay-show");
    })

close.addEventListener('click', ( ) => {
        // event.preventDefault();
        popup.classList.remove("show-modal-content");
        closeOverlay.classList.remove("modal-overlay-show");
    })

overlay.addEventListener("click", ( ) => {
        // event.preventDefault();
        overlay.classList.remove("show-modal-content");
    })
    
closeOverlay.addEventListener("click", ( ) => {
        // event.preventDefault();
        closeOverlay.classList.remove("modal-overlay-show");
        popup.classList.remove("show-modal-content");
    })