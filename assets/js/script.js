document.addEventListener('DOMContentLoaded', function() {
    // Current Date Setup
    const dateElement = document.getElementById('currentDate');
    if(dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('id-ID', options);
    }

    // Chart.js Initialization (Dummy Data)
    const ctx = document.getElementById('attendanceChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Kehadiran', 'TK', 'AB', 'WFH', 'CUTI', 'TM', 'DINAS'],
                datasets: [{
                    data: [80, 5, 2, 5, 3, 2, 3],
                    backgroundColor: [
                        '#23a44e', // Kehadiran
                        '#f59e0b', // TK
                        '#EF4444', // AB
                        '#d85ffae6', // WFH
                        '#114dad', // CUTI
                        '#b59f0e', // TM
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 10,
                            usePointStyle: true,
                        }
                    }
                },
                cutout: '70%'
            }
        });
    }

    // Hover effects for cards
    const cards = document.querySelectorAll('.custom-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add any specific JS hover logic if needed simpler CSS hover covers most
        });
    });

    // Notification Popup Logic
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationPopup = document.getElementById('notificationPopup');
    
    if (notificationBtn && notificationPopup) {
        notificationBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            notificationPopup.classList.toggle('show');
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!notificationPopup.contains(e.target) && !notificationBtn.contains(e.target)) {
                notificationPopup.classList.remove('show');
            }
        });
    }

    // Grid Menu Toggle
    const gridMenuBtn = document.getElementById('gridMenuBtn');
    const appsGridOverlay = document.getElementById('appsGridOverlay');

    if (gridMenuBtn && appsGridOverlay) {
        gridMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            appsGridOverlay.classList.toggle('show');
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!appsGridOverlay.contains(e.target) && !gridMenuBtn.contains(e.target)) {
                appsGridOverlay.classList.remove('show');
            }
        });
    }
});
