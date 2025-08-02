// Shared functions across pages

// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Time display function
function updateTimeDisplay(elementId) {
    const now = new Date();
    document.getElementById(elementId).textContent = now.toLocaleTimeString();
    setTimeout(() => updateTimeDisplay(elementId), 1000);
}

// Modal handling
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});