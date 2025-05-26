// Image preview logic
const bikeImage = document.getElementById('bikeImage');

const colorMap = {
  "Midnight Black": "bike-black.png",
  "Ocean Blue": "bike-blue.png",
  "Forest Green": "bike-green.png",
  "Sunset Red": "bike-red.png"
};

function selectOption(button, category) {
  // Remove 'active' from other buttons in the same group
  const buttons = button.parentElement.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Update the bike image if color option is changed
  if (category === 'color') {
    const selectedColor = button.innerText.trim();
    const imageFile = colorMap[selectedColor];
    if (imageFile) {
      bikeImage.src = `images/${imageFile}`;
    }
  }

  updateBikePreview();
}

function toggleOption(button) {
  button.classList.toggle('active');
  updateBikePreview();
}

function updateBikePreview() {
  // Placeholder logic — could be expanded later to include other options
  console.log('Bike preview updated');
}

// Toggle mobile navigation menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Collapse nav menu on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});
