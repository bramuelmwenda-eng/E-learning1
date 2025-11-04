// Example simple scroll animation
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card, .course-card, .testimonial");
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    }
  });
});
document.querySelectorAll('.categories .card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    const courses = document.querySelectorAll('#course-list .course-card');

    // Smooth scroll to course section
    document.querySelector('.popular').scrollIntoView({ behavior: 'smooth' });

    // Filter courses by category
    courses.forEach(course => {
      if (course.dataset.category === category) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  });
});

const hero = document.querySelector('.hero');
const slideTitle = document.getElementById('slide-title');
const slideDesc = document.getElementById('slide-desc');

// Slides: image, title, and description
const slides = [
  {
    img: 'advav.jpg',
    title: 'Advanced Learning',
    desc: 'Master new skills and elevate your career through our professional courses.'
  },
  {
    img: 'groupwork.jpg',
    title: 'Collaborative Learning',
    desc: 'Engage in teamwork and group discussions to grow together.'
  },
  {
    img: 'googlemeet.jpg',
    title: 'Live Virtual Classes',
    desc: 'Join real-time lessons with expert instructors through video sessions.'
  }
];

let currentSlide = 0;

function changeSlide() {
  const slide = slides[currentSlide];
  
  // Change background
  hero.style.backgroundImage = `url(${slide.img})`;
  
  // Change text
  slideTitle.textContent = slide.title;
  slideDesc.textContent = slide.desc;
  
  // Add animation effect on every change
  document.querySelector('.overlay').classList.remove('fade');
  void document.querySelector('.overlay').offsetWidth; // Trigger reflow
  document.querySelector('.overlay').classList.add('fade');
  
  // Move to next
  currentSlide = (currentSlide + 1) % slides.length;
}

// Initialize first slide
changeSlide();

// Change every 5 seconds
setInterval(changeSlide, 5000);
