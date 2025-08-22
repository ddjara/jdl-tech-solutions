// JDL TECH SOLUTIONS - Website Functions

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Dropdown toggle
function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('active');
}

// Search functionality
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (searchContainer) {
        searchContainer.classList.toggle('hidden');
        if (!searchContainer.classList.contains('hidden')) {
            document.getElementById('searchInput').focus();
        }
    }
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim()) {
        alert('Search functionality coming soon! You searched for: ' + searchTerm);
    }
}

// Smooth scrolling for same-page links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Handle same-page anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            const element = document.querySelector(target);
            if (element) {
                e.preventDefault();
                smoothScroll(target);
            }
        });
    });
    
    // Close search and mobile menu on outside click
    document.addEventListener('click', function(e) {
        const searchContainer = document.getElementById('searchContainer');
        const searchBtn = document.querySelector('.search-icon-btn');
        const mobileNav = document.querySelector('.main-nav');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (searchContainer && !searchContainer.classList.contains('hidden') && 
            !searchContainer.contains(e.target) && e.target !== searchBtn) {
            searchContainer.classList.add('hidden');
        }
        
        if (mobileNav && mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && e.target !== mobileToggle) {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});