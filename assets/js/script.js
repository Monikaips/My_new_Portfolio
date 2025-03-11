window.addEventListener("scroll", function () {
    let scrollTopBtn = document.querySelector(".scroll-top");
  
    if (window.scrollY > 200) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });
  
  // Scroll to top smoothly when clicked
  document.querySelector(".scroll-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //Close button for readmore

  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};

