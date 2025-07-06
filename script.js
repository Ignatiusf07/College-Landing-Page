// Live Clock
function updateClock() {
    const clock = document.getElementById('live-clock');
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();

// Animated Counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 100);
        function update() {
            count += increment;
            if (count > target) count = target;
            counter.textContent = count;
            if (count < target) {
                requestAnimationFrame(update);
            }
        }
        update();
    });
}
window.addEventListener('DOMContentLoaded', animateCounters);

// Gallery Images (placeholder)
const galleryImages = [
    'assets/images/campus1.jpg',
    'assets/images/campus2.jpg',
    'assets/images/campus3.jpg'
];
const galleryInner = document.getElementById('gallery-images');
if (galleryInner) {
    galleryImages.forEach((src, idx) => {
        const div = document.createElement('div');
        div.className = 'carousel-item' + (idx === 0 ? ' active' : '');
        div.innerHTML = `<img src="${src}" class="d-block w-100" alt="Campus ${idx+1}">`;
        galleryInner.appendChild(div);
    });
}

// Courses (placeholder)
const courses = [
    { title: 'B.Sc Computer Science', desc: 'Learn programming, algorithms, and more.' },
    { title: 'B.Com', desc: 'Commerce, accounting, and business studies.' },
    { title: 'B.A. English', desc: 'Literature, linguistics, and communication.' }
];
const coursesList = document.getElementById('courses-list');
if (coursesList) {
    courses.forEach(course => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.desc}</p>
                </div>
            </div>
        `;
        coursesList.appendChild(col);
    });
}

// Faculty/Departments (placeholder)
const faculty = [
    { name: 'Department of Science', desc: 'Leading research and innovation.' },
    { name: 'Department of Commerce', desc: 'Business and finance experts.' },
    { name: 'Department of Arts', desc: 'Creativity and critical thinking.' }
];
const facultyList = document.getElementById('faculty-list');
if (facultyList) {
    faculty.forEach(fac => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100 border-primary">
                <div class="card-body">
                    <h5 class="card-title">${fac.name}</h5>
                    <p class="card-text">${fac.desc}</p>
                </div>
            </div>
        `;
        facultyList.appendChild(col);
    });
}

// Events (placeholder)
const events = [
    { date: '2024-07-10', title: 'Orientation Day' },
    { date: '2024-08-15', title: 'Independence Day Celebration' },
    { date: '2024-09-05', title: 'Teachers Day' }
];
const eventsList = document.getElementById('events-list');
if (eventsList) {
    events.forEach(event => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<strong>${event.date}</strong>: ${event.title}`;
        eventsList.appendChild(li);
    });
}

// Testimonials (placeholder)
const testimonials = [
    { name: 'Alice', text: 'Great campus and faculty!' },
    { name: 'Bob', text: 'Amazing learning experience.' },
    { name: 'Carol', text: 'Supportive environment and lots of opportunities.' }
];
const testimonialList = document.getElementById('testimonial-list');
if (testimonialList) {
    testimonials.forEach((t, idx) => {
        const div = document.createElement('div');
        div.className = 'carousel-item' + (idx === 0 ? ' active' : '');
        div.innerHTML = `
            <blockquote>"${t.text}"</blockquote>
            <footer class="blockquote-footer">${t.name}</footer>
        `;
        testimonialList.appendChild(div);
    });
}

// Weather Widget (placeholder)
document.getElementById('weather-info').textContent = 'Sunny, 28°C';

// Contact Form (no backend, just alert)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
}

// Gallery Lightbox for Campus Gallery
const galleryLinks = document.querySelectorAll('.gallery-lightbox');
const galleryModal = document.getElementById('galleryModal');
const galleryModalImg = document.getElementById('galleryModalImg');

galleryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('href');
        galleryModalImg.src = imgSrc;
        const modal = new bootstrap.Modal(galleryModal);
        modal.show();
    });
}); 