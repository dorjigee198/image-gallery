function openModal(imgSrc, imgAlt) {
    var modal = document.getElementById("lightbox");
    var modalImg = document.getElementById("modal-img");
  
    modal.style.display = "flex";
    modal.classList.add("active");
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
  
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  }
  
  // Close lightbox modal
  function closeModal() {
    var modal = document.getElementById("lightbox");
    
    modal.style.display = "none";
    modal.classList.remove("active");
  
    document.body.style.overflow = ""; // Enable scrolling
  }
  
  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    var modal = document.getElementById("lightbox");
    
    if (event.target == modal) {
      closeModal();
    }
  };