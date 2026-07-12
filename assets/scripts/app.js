// ── Dummy Data ──
const hotels = [
  { id: 1, name: "Grand Hyatt Jakarta", city: "jakarta", location: "Jakarta Pusat", price: 1850000, rating: 4.8, reviews: 2341, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", badge: "Best Seller", amenities: ["wifi", "pool", "spa", "gym", "restaurant", "parking"], description: "Experience world-class luxury in the heart of Jakarta. Grand Hyatt offers stunning city views, exceptional dining, and unparalleled service." },
  { id: 2, name: "The Mulia Bali", city: "bali", location: "Nusa Dua, Bali", price: 3200000, rating: 4.9, reviews: 1876, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", badge: "Luxury", amenities: ["wifi", "pool", "spa", "gym", "restaurant", "beach"], description: "A beachfront paradise offering the ultimate in luxury with private beach access, world-class spa, and breathtaking ocean views." },
  { id: 3, name: "Hotel Tentrem Yogyakarta", city: "yogyakarta", location: "Yogyakarta", price: 1450000, rating: 4.7, reviews: 1523, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", badge: "Top Rated", amenities: ["wifi", "pool", "spa", "gym", "restaurant", "parking"], description: "Blending Javanese heritage with modern luxury, Hotel Tentrem provides a serene retreat in the cultural heart of Java." },
  { id: 4, name: "Padma Resort Ubud", city: "bali", location: "Ubud, Bali", price: 2750000, rating: 4.8, reviews: 1654, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80", badge: "Popular", amenities: ["wifi", "pool", "spa", "restaurant", "nature"], description: "Nestled in the lush Payangan Valley, Padma Resort Ubud offers an infinity pool overlooking the jungle and world-class wellness treatments." },
  { id: 5, name: "Trans Luxury Hotel", city: "bandung", location: "Bandung", price: 1200000, rating: 4.5, reviews: 987, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", badge: null, amenities: ["wifi", "pool", "gym", "restaurant", "parking"], description: "A landmark of luxury in Bandung, featuring elegant rooms, a rooftop pool, and easy access to the city's attractions." },
  { id: 6, name: "Ayana Resort Bali", city: "bali", location: "Jimbaran, Bali", price: 2900000, rating: 4.9, reviews: 2105, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80", badge: "Premium", amenities: ["wifi", "pool", "spa", "gym", "restaurant", "beach"], description: "Perched on cliffs above Jimbaran Bay, Ayana offers multiple pools, a famous rock bar, and stunning sunset views." },
  { id: 7, name: "Shangri-La Jakarta", city: "jakarta", location: "Jakarta Selatan", price: 2100000, rating: 4.7, reviews: 1432, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", badge: null, amenities: ["wifi", "pool", "spa", "gym", "restaurant", "parking"], description: "An oasis of calm in South Jakarta, Shangri-La delivers Asian hospitality with lush tropical gardens and refined dining." },
  { id: 8, name: "The Phoenix Yogyakarta", city: "yogyakarta", location: "Yogyakarta", price: 980000, rating: 4.4, reviews: 876, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80", badge: "Value", amenities: ["wifi", "pool", "restaurant", "parking"], description: "A heritage hotel combining colonial charm with modern comfort, located in the heart of Yogyakarta's cultural district." },
  { id: 9, name: "Hilton Bandung", city: "bandung", location: "Bandung", price: 1350000, rating: 4.6, reviews: 1123, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", badge: null, amenities: ["wifi", "pool", "gym", "restaurant", "parking", "spa"], description: "Modern luxury meets mountain charm. Enjoy panoramic views of Bandung's highlands with premium amenities and warm hospitality." },
];

const cities = ["Jakarta", "Bali", "Yogyakarta", "Bandung", "Surabaya", "Malang", "Semarang", "Medan", "Makassar", "Lombok"];

const amenityIcons = {
  wifi: { icon: "fas fa-wifi", label: "Free WiFi" },
  pool: { icon: "fas fa-swimming-pool", label: "Swimming Pool" },
  spa: { icon: "fas fa-spa", label: "Spa & Wellness" },
  gym: { icon: "fas fa-dumbbell", label: "Fitness Center" },
  restaurant: { icon: "fas fa-utensils", label: "Restaurant" },
  parking: { icon: "fas fa-parking", label: "Free Parking" },
  beach: { icon: "fas fa-umbrella-beach", label: "Beach Access" },
  nature: { icon: "fas fa-leaf", label: "Nature View" },
};

// ── DOM Elements ──
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("city");
const citySuggestions = document.getElementById("citySuggestions");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");
const hotelGrid = document.getElementById("hotelGrid");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const hotelModal = document.getElementById("hotelModal");
const backToTop = document.getElementById("backToTop");
const toast = document.getElementById("toast");

// ── Initialize ──
function init() {
  setDefaultDates();
  renderHotels(hotels);
  initEventListeners();
  animateOnScroll();
}

// ── Set Default Dates ──
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  checkinInput.value = formatDate(today);
  checkoutInput.value = formatDate(tomorrow);
  checkinInput.min = formatDate(today);
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

// ── Event Listeners ──
function initEventListeners() {
  // Navbar scroll
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });

  // Mobile nav toggle
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });

  // City autocomplete
  cityInput.addEventListener("input", handleCityInput);
  cityInput.addEventListener("focus", handleCityInput);
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".form-group")) {
      citySuggestions.classList.remove("active");
    }
  });

  // Check-in date change updates checkout min
  checkinInput.addEventListener("change", () => {
    const nextDay = new Date(checkinInput.value);
    nextDay.setDate(nextDay.getDate() + 1);
    checkoutInput.min = formatDate(nextDay);
    if (checkoutInput.value <= checkinInput.value) {
      checkoutInput.value = formatDate(nextDay);
    }
  });

  // Search form
  searchForm.addEventListener("submit", handleSearch);

  // Filters
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", handleFilter);
  });

  // Modals
  loginBtn.addEventListener("click", () => openModal(loginModal));
  registerBtn.addEventListener("click", () => openModal(registerModal));
  document.getElementById("loginClose").addEventListener("click", () => closeModal(loginModal));
  document.getElementById("registerClose").addEventListener("click", () => closeModal(registerModal));
  document.getElementById("hotelClose").addEventListener("click", () => closeModal(hotelModal));
  document.getElementById("switchToRegister").addEventListener("click", (e) => {
    e.preventDefault();
    closeModal(loginModal);
    openModal(registerModal);
  });
  document.getElementById("switchToLogin").addEventListener("click", (e) => {
    e.preventDefault();
    closeModal(registerModal);
    openModal(loginModal);
  });

  // Modal backdrop close
  [loginModal, registerModal, hotelModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Form submissions
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal(loginModal);
    showToast("Login successful! Welcome back.");
  });

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal(registerModal);
    showToast("Account created successfully!");
  });

  // Back to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── City Autocomplete ──
function handleCityInput() {
  const value = cityInput.value.toLowerCase().trim();
  const filtered = cities.filter((c) => c.toLowerCase().includes(value));

  if (filtered.length && value.length > 0) {
    citySuggestions.innerHTML = filtered
      .map((c) => `<div class="suggestion" data-city="${c}">${c}</div>`)
      .join("");
    citySuggestions.classList.add("active");

    citySuggestions.querySelectorAll(".suggestion").forEach((el) => {
      el.addEventListener("click", () => {
        cityInput.value = el.dataset.city;
        citySuggestions.classList.remove("active");
      });
    });
  } else {
    citySuggestions.classList.remove("active");
  }
}

// ── Search ──
function handleSearch(e) {
  e.preventDefault();
  const city = cityInput.value.toLowerCase().trim();
  let filtered = hotels;

  if (city) {
    filtered = hotels.filter(
      (h) => h.city.includes(city) || h.location.toLowerCase().includes(city) || h.name.toLowerCase().includes(city)
    );
  }

  renderHotels(filtered);

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  const matchingFilter = document.querySelector(`.filter-btn[data-filter="${city}"]`);
  if (matchingFilter) {
    matchingFilter.classList.add("active");
  } else {
    document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
  }

  // Scroll to results
  document.getElementById("hotels").scrollIntoView({ behavior: "smooth" });

  if (filtered.length === 0) {
    showToast("No hotels found. Try a different destination.");
  } else {
    showToast(`Found ${filtered.length} hotel${filtered.length > 1 ? "s" : ""} for you!`);
  }
}

// ── Filter ──
function handleFilter(e) {
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");

  const filter = e.target.dataset.filter;
  const filtered = filter === "all" ? hotels : hotels.filter((h) => h.city === filter);
  renderHotels(filtered);
}

// ── Render Hotels ──
function renderHotels(data) {
  hotelGrid.innerHTML = data
    .map(
      (hotel) => `
    <div class="hotel-card" data-id="${hotel.id}">
      <div class="hotel-card-image">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" />
        ${hotel.badge ? `<span class="hotel-card-badge">${hotel.badge}</span>` : ""}
        <button class="hotel-card-favorite" aria-label="Add to favorites">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="hotel-card-body">
        <div class="hotel-card-location">
          <i class="fas fa-map-marker-alt"></i> ${hotel.location}
        </div>
        <h3 class="hotel-card-name">${hotel.name}</h3>
        <div class="hotel-card-rating">
          <span class="stars">${getStars(hotel.rating)}</span>
          <span>${hotel.rating} (${hotel.reviews.toLocaleString()} reviews)</span>
        </div>
        <div class="hotel-card-footer">
          <div class="hotel-card-price">
            Rp ${(hotel.price / 1000).toFixed(0)}k <small>/night</small>
          </div>
          <button class="hotel-card-book" data-id="${hotel.id}">View Deal</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Attach events
  hotelGrid.querySelectorAll(".hotel-card-book").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openHotelDetail(parseInt(btn.dataset.id));
    });
  });

  hotelGrid.querySelectorAll(".hotel-card").forEach((card) => {
    card.addEventListener("click", () => {
      openHotelDetail(parseInt(card.dataset.id));
    });
  });

  hotelGrid.querySelectorAll(".hotel-card-favorite").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("active");
      const icon = btn.querySelector("i");
      icon.classList.toggle("far");
      icon.classList.toggle("fas");
      showToast(btn.classList.contains("active") ? "Added to favorites!" : "Removed from favorites.");
    });
  });
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let stars = "";
  for (let i = 0; i < full; i++) stars += '<i class="fas fa-star"></i>';
  if (half) stars += '<i class="fas fa-star-half-alt"></i>';
  return stars;
}

// ── Hotel Detail ──
function openHotelDetail(id) {
  const hotel = hotels.find((h) => h.id === id);
  if (!hotel) return;

  const detail = document.getElementById("hotelDetail");
  detail.innerHTML = `
    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-detail-image" />
    <h2>${hotel.name}</h2>
    <div class="hotel-detail-info">
      <span><i class="fas fa-map-marker-alt"></i> ${hotel.location}</span>
      <span><i class="fas fa-star" style="color: var(--accent)"></i> ${hotel.rating} (${hotel.reviews.toLocaleString()} reviews)</span>
    </div>
    <p class="hotel-detail-desc">${hotel.description}</p>
    <h4 style="margin-bottom: 0.75rem; font-size: 1rem;">Amenities</h4>
    <div class="hotel-detail-amenities">
      ${hotel.amenities
        .map(
          (a) => `
        <div class="amenity">
          <i class="${amenityIcons[a].icon}"></i>
          <span>${amenityIcons[a].label}</span>
        </div>
      `
        )
        .join("")}
    </div>
    <div class="hotel-detail-footer">
      <div class="hotel-detail-price">
        Rp ${hotel.price.toLocaleString("id-ID")} <small>/night</small>
      </div>
      <button class="btn btn-primary" onclick="handleBooking('${hotel.name}')">Book Now</button>
    </div>
  `;

  openModal(hotelModal);
}

function handleBooking(hotelName) {
  closeModal(hotelModal);
  showToast(`Booking confirmed for ${hotelName}! Check your email.`);
}

// ── Modal Helpers ──
function openModal(modal) {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ── Toast ──
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ── Animate Stats on Scroll ──
function animateOnScroll() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statNumbers.forEach((el) => {
            const target = parseInt(el.dataset.target);
            animateNumber(el, target);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector(".stats");
  if (statsSection) observer.observe(statsSection);
}

function animateNumber(el, target) {
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    if (target >= 1000) {
      el.textContent = current.toLocaleString("id-ID") + "+";
    } else {
      el.textContent = target === 4 ? current + ".8" : current + "+";
    }

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ── Start ──
document.addEventListener("DOMContentLoaded", init);
