// Sidebar Toggle for Mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

// Logout Modal
function showLogoutModal() {
  const modal = document.getElementById("logoutModal");
  modal.classList.add("show");
}

function closeLogoutModal() {
  const modal = document.getElementById("logoutModal");
  modal.classList.remove("show");
}

function logout() {
  alert("Logging out...");
  // Redirect to login page or perform logout action
  window.location.href = "index.html";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("logoutModal");
  if (event.target === modal) {
    closeLogoutModal();
  }
};

// Lembur Slider
let currentSlide = 0;

function goToSlide(index) {
  const slider = document.getElementById("lemburSlider");
  const dots = document.querySelectorAll(".slider-dot");

  currentSlide = index;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => {
    if (i === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Auto slide for Lembur
setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  goToSlide(currentSlide);
}, 5000);

// Statistics Chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("statisticsChart");
  if (ctx) {
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Kehadiran", "AB", "Cuti", "Dinas", "TK", "WFH", "TM"],
        datasets: [
          {
            data: [80, 5, 0, 0, 10, 0, 0],
            backgroundColor: [
              "#23a44e",
              "#EF4444",
              "#114dad",
              "#06b6d4",
              "#f59e0b",
              "#d85ffae6",
              "#b59f0e",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        cutout: "60%",
      },
    });
  }
});

// Active Menu Item
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const menuItems = document.querySelectorAll(".sidebar-menu-item");

  menuItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// Toggle popup notifikasi
document
  .querySelector(".notification-icon")
  .addEventListener("click", function () {
    const popup = document.getElementById("notificationPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  });

// Klik di luar popup untuk menutup
document.addEventListener("click", function (e) {
  const popup = document.getElementById("notificationPopup");
  const bell = document.querySelector(".notification-icon");

  if (!popup.contains(e.target) && !bell.contains(e.target)) {
    popup.style.display = "none";
  }
});
