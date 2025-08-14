/ Main application initialization and event handlers for InTube

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 InTube application starting...');
    
    // Initialize the application
    initializeApp();
    
    // Set up event listeners
    setupEventListeners();
    
    console.log('✅ InTube application initialized successfully!');
});

function initializeApp() {
    try {
        // Generate initial video cards
        generateVideoCards();
        
        // Initialize search suggestions
        initializeSearchSuggestions();
        
        // Set up responsive behavior
        setupResponsiveDesign();
        
        // Initialize keyboard shortcuts
        setupKeyboardShortcuts();
        
        console.log('📱 App components initialized');
    } catch (error) {
        console.error('❌ Error initializing app:', error);
    }
}

function setupEventListeners() {
    try {
        // Sidebar toggle
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.addEventListener('click', toggleSidebar);
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('focus', showSearchSuggestions);
            searchInput.addEventListener('blur', hideSearchSuggestions);
            
            // Real-time search with debouncing
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value;
                if (query.length > 0) {
                    updateSearchSuggestions(query);
                    showSearchSuggestions();
                } else {
                    hideSearchSuggestions();
                }
            });
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    searchVideos(searchInput.value);
                }
            });
        }

        // Category filter functionality
        const categoryButtons = document.querySelectorAll('button[class*="px-4 py-2"]');
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                filterByCategory(button.textContent.trim(), button);
            });
        });

        // Initial search suggestion clicks
        setupSearchSuggestionClicks();
        
        console.log('🎯 Event listeners set up successfully');
    } catch (error) {
        console.error('❌ Error setting up event listeners:', error);
    }
}

function initializeSearchSuggestions() {
    const suggestionsContainer = document.querySelector('#searchSuggestions .p-2');
    if (suggestionsContainer) {
        suggestionsContainer.innerHTML = searchSuggestions.slice(0, 4).map(suggestion => `
            <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded suggestion-item">
                ${suggestion}
            </div>
        `).join('');
        
        setupSearchSuggestionClicks();
    }
}

function setupSearchSuggestionClicks() {
    document.querySelectorAll('.suggestion-item').forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = suggestion.textContent.trim();
                searchVideos(suggestion.textContent.trim());
            }
        });
    });
}

function setupResponsiveDesign() {
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        
        if (window.innerWidth < 768) {
            // Mobile view
            if (sidebar && !sidebar.classList.contains('sidebar-collapsed')) {
                sidebar.classList.add('sidebar-collapsed');
                if (mainContent) {
                    mainContent.classList.add('main-expanded');
                }
            }
        }
    }, 250));
    
    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            generateVideoCards();
        }, 100);
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        
        // Escape to close modals or clear search
        if (e.key === 'Escape') {
            const modal = document.querySelector('.fixed.inset-0.bg-black');
            if (modal) {
                closeModal(modal);
            } else {
                const searchInput = document.getElementById('searchInput');
                if (searchInput && searchInput === document.activeElement) {
                    searchInput.blur();
                    hideSearchSuggestions();
                }
            }
        }
        
        // Space to toggle sidebar
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            toggleSidebar();
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance monitoring
function logPerformance() {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`📊 Page load time: ${loadTime}ms`);
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('🚨 Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('🚨 Unhandled promise rejection:', e.reason);
});

// Export functions for global access
window.InTube = {
    generateVideoCards,
    toggleSidebar,
    searchVideos,
    filterByCategory,
    playVideo,
    showSearchSuggestions,
    hideSearchSuggestions
};

// Log performance after load
window.addEventListener('load', () => {
    setTimeout(logPerformance, 100);
});

console.log('🎬 InTube main.js loaded successfully!');

