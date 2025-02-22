const swiper = new Swiper('.swiper', {
  loop: true, // Enable looping
  slidesPerView: 3.5, // Default number of slides visible on large screens
  spaceBetween: 20, // Space between slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // Auto slide delay in ms
    disableOnInteraction: false,
  },
  breakpoints: {
    // For screens less than or equal to 1024px
    1200: {
      slidesPerView: 3.5,
    },
    // For screens less than or equal to 768px
    1199: {
      slidesPerView: 3,
    },
    // For screens less than or equal to 480px
    575: {
      slidesPerView: 2,
    },
    // For screens less than or equal to 480px
    320: {
      slidesPerView: 1.2,
    }
  }
});



// Filter Portfolio Items
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Function to open the modal and display the clicked image
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = src;
}

// Function to close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Attach click event listeners to each image
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', function () {
        openModal(this.src);
    });
});

