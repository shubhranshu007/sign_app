/ UI utility functions for InTube

// Generate video cards
function generateVideoCards(videosToShow = videos) {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    videoGrid.innerHTML = '';

    videosToShow.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300';
        videoCard.innerHTML = `
            <div class="relative">
                <div class="video-thumbnail rounded-t-lg" style="background: ${video.thumbnail};">
                    <div class="absolute inset-0 flex items-center justify-center group">
                        <div class="w-16 h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-200">
                            <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded font-medium">
                        ${video.duration}
                    </div>
                    <div class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        HD
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-teal-400 rounded-full flex-shrink-0 flex items-center justify-center">
                            <span class="text-white text-sm font-semibold">${video.channel[0]}</span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-semibold text-sm line-clamp-2 mb-2 text-gray-900 hover:text-blue-600 transition-colors duration-200">
                                ${video.title}
                            </h3>
                            <p class="text-gray-600 text-sm mb-1 hover:text-gray-800 transition-colors duration-200">
                                ${video.channel}
                            </p>
                            <div class="flex items-center text-gray-500 text-sm space-x-1">
                                <span>${video.views}</span>
                                <span>•</span>
                                <span>${video.time}</span>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <button class="p-1 hover:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        videoCard.addEventListener('click', () => {
            playVideo(video);
        });
        
        videoGrid.appendChild(videoCard);
    });
}

// Toggle sidebar with animation
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (!sidebar || !mainContent) return;
    
    sidebar.classList.toggle('sidebar-collapsed');
    
    if (sidebar.classList.contains('sidebar-collapsed')) {
        mainContent.classList.add('main-expanded');
        // Hide text in collapsed sidebar
        document.querySelectorAll('.sidebar-text').forEach(text => {
            text.style.opacity = '0';
            setTimeout(() => {
                text.style.display = 'none';
            }, 150);
        });
    } else {
        mainContent.classList.remove('main-expanded');
        // Show text in expanded sidebar
        document.querySelectorAll('.sidebar-text').forEach(text => {
            text.style.display = 'block';
            setTimeout(() => {
                text.style.opacity = '1';
            }, 150);
        });
    }
}

// Show search suggestions with animation
function showSearchSuggestions() {
    const searchSuggestions = document.getElementById('searchSuggestions');
    if (searchSuggestions) {
        searchSuggestions.classList.remove('hidden');
        searchSuggestions.style.opacity = '0';
        searchSuggestions.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            searchSuggestions.style.opacity = '1';
            searchSuggestions.style.transform = 'translateY(0)';
        }, 10);
    }
}

// Hide search suggestions with animation
function hideSearchSuggestions() {
    const searchSuggestions = document.getElementById('searchSuggestions');
    if (searchSuggestions) {
        searchSuggestions.style.opacity = '0';
        searchSuggestions.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            searchSuggestions.classList.add('hidden');
        }, 200);
    }
}

// Filter by category with visual feedback
function filterByCategory(category, buttonElement) {
    const categoryButtons = document.querySelectorAll('button[class*="px-4 py-2"]');
    
    // Remove active class from all buttons
    categoryButtons.forEach(btn => {
        btn.className = 'px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm whitespace-nowrap category-btn';
    });
    
    // Add active class to clicked button
    if (buttonElement) {
        buttonElement.className = 'px-4 py-2 bg-black text-white rounded-full text-sm whitespace-nowrap category-btn';
    }
    
    // Filter videos based on category
    let filteredVideos = videos;
    if (category !== 'All') {
        filteredVideos = videos.filter(video => 
            video.category === category || 
            video.title.toLowerCase().includes(category.toLowerCase())
        );
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        generateVideoCards(filteredVideos);
        hideLoadingState();
    }, 300);
    
    console.log(`Filtering by: ${category}, Found ${filteredVideos.length} videos`);
}

// Play video function with enhanced modal
function playVideo(video) {
    const modal = createVideoModal(video);
    document.body.appendChild(modal);
    
    // Animate modal appearance
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.querySelector('.modal-content').classList.add('scale-100');
    }, 10);
}

// Create video modal
function createVideoModal(video) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300';
    modal.innerHTML = `
        <div class="modal-content bg-white rounded-lg p-6 max-w-2xl w-full mx-4 transform scale-95 transition-transform duration-300">
            <div class="flex justify-between items-start mb-4">
                <h2 class="text-xl font-bold text-gray-900 pr-4">${video.title}</h2>
                <button class="close-modal text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
            </div>
            <div class="video-placeholder bg-gradient-to-r ${video.thumbnail.replace('linear-gradient(45deg, ', '').replace(')', '')} h-64 rounded-lg flex items-center justify-center mb-4">
                <div class="text-white text-center">
                    <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p class="text-lg font-semibold">Playing: ${video.duration}</p>
                </div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-700"><strong>Channel:</strong> ${video.channel}</p>
                <p class="text-gray-700"><strong>Views:</strong> ${video.views}</p>
                <p class="text-gray-700"><strong>Published:</strong> ${video.time}</p>
                <p class="text-gray-700"><strong>Category:</strong> ${video.category}</p>
                <p class="text-gray-600 text-sm mt-3">${video.description}</p>
            </div>
        </div>
    `;
    
    // Close modal functionality
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            closeModal(modal);
        }
    });
    
    return modal;
}

// Close modal with animation
function closeModal(modal) {
    modal.classList.remove('opacity-100');
    modal.querySelector('.modal-content').classList.remove('scale-100');
    
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// Search function with debouncing
let searchTimeout;
function searchVideos(query) {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        if (query.trim()) {
            const filteredVideos = videos.filter(video =>
                video.title.toLowerCase().includes(query.toLowerCase()) ||
                video.channel.toLowerCase().includes(query.toLowerCase()) ||
                video.category.toLowerCase().includes(query.toLowerCase())
            );
            
            showLoadingState();
            setTimeout(() => {
                generateVideoCards(filteredVideos);
                hideLoadingState();
            }, 300);
            
            console.log(`Searching for: ${query}, Found ${filteredVideos.length} videos`);
        } else {
            generateVideoCards(videos);
        }
        hideSearchSuggestions();
    }, 300);
}

// Show loading state
function showLoadingState() {
    const videoGrid = document.getElementById('videoGrid');
    if (videoGrid) {
        videoGrid.innerHTML = `
            <div class="col-span-full flex items-center justify-center py-12">
                <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p class="text-gray-600">Loading videos...</p>
                </div>
            </div>
        `;
    }
}

// Hide loading state
function hideLoadingState() {
    // Loading state is replaced by generateVideoCards
}

// Update search suggestions dynamically
function updateSearchSuggestions(query) {
    const suggestionsContainer = document.querySelector('#searchSuggestions .p-2');
    if (!suggestionsContainer) return;
    
    const filteredSuggestions = searchSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);
    
    suggestionsContainer.innerHTML = filteredSuggestions.map(suggestion => `
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded suggestion-item">
            ${suggestion}
        </div>
    `).join('');
    
    // Add click handlers to new suggestions
    suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = item.textContent.trim();
                searchVideos(item.textContent.trim());
            }
        });
    });
}