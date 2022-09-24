const modal = document.querySelector(".modal");

// display modal if user uses device under 768px of width
window.onload = () => {
  const body = document.body;
  const { width } = body.getBoundingClientRect();
  const modal = document.querySelector(".modal");
  
  if (width <= 768) modal.classList.add("modal-active");
};

// close modal function
function closeModal(modal) {
  modal.classList.add("modal-disabled");
}
