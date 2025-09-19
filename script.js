// CinePulse Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            pageSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchBar.value.trim();
        if (query) {
            // Switch to search results page
            navLinks.forEach(l => l.classList.remove('active'));
            pageSections.forEach(s => s.classList.remove('active'));
            
            document.querySelector('a[href="#search"]').classList.add('active');
            document.getElementById('search').classList.add('active');
            
            // Simulate search results (in a real app, this would make an API call)
            console.log('Searching for:', query);
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Movie card hover effects
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Emoji reaction functionality
    const emojis = document.querySelectorAll('.emoji');
    
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(1.3)';
            this.style.background = 'rgba(255, 68, 68, 0.3)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 200);
            
            // In a real app, this would send data to the server
            console.log('Emoji clicked:', this.textContent);
        });
    });
    
    // Filter button functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real app, this would filter the movie results
            console.log('Filter applied:', this.textContent);
        });
    });
    
    // Action button functionality (like, comment, share)
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add visual feedback
            this.style.background = '#2a2a2a';
            this.style.color = '#ff4444';
            
            setTimeout(() => {
                this.style.background = 'transparent';
                this.style.color = '#b0b0b0';
            }, 300);
            
            // In a real app, this would interact with the backend
            console.log('Action clicked:', this.textContent);
        });
    });
    
    // Club join button functionality
    const joinBtns = document.querySelectorAll('.btn-primary');
    
    joinBtns.forEach(btn => {
        if (btn.textContent.includes('Join')) {
            btn.addEventListener('click', function() {
                // Add visual feedback
                this.style.background = 'linear-gradient(135deg, #ff6666, #ff8888)';
                this.textContent = 'Joined!';
                this.disabled = true;
                
                setTimeout(() => {
                    this.style.background = 'linear-gradient(135deg, #ff4444, #ff6666)';
                    this.textContent = 'Join Club';
                    this.disabled = false;
                }, 2000);
                
                console.log('Club joined');
            });
        }
    });
    
    // Watchlist functionality
    const watchlistBtns = document.querySelectorAll('.btn-primary');
    
    watchlistBtns.forEach(btn => {
        if (btn.textContent.includes('Watchlist')) {
            btn.addEventListener('click', function() {
                // Toggle button state
                if (this.textContent === 'Add to Watchlist') {
                    this.textContent = 'Added to Watchlist';
                    this.style.background = 'linear-gradient(135deg, #28a745, #34ce57)';
                } else {
                    this.textContent = 'Add to Watchlist';
                    this.style.background = 'linear-gradient(135deg, #ff4444, #ff6666)';
                }
                
                console.log('Watchlist updated');
            });
        }
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all movie cards and feed cards
    const animatedElements = document.querySelectorAll('.movie-card, .feed-card, .club-card, .poll-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Emotional fingerprint animation
    const emotionBars = document.querySelectorAll('.bar');
    
    function animateBars() {
        emotionBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.style.width || '0%';
                bar.style.transition = 'width 1s ease';
            }, index * 200);
        });
    }
    
    // Animate bars when movie detail page is viewed
    const movieDetailSection = document.getElementById('movie-detail');
    if (movieDetailSection) {
        const detailObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateBars();
                    detailObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        detailObserver.observe(movieDetailSection);
    }
    
    // Poll interaction simulation
    const pollOptions = document.querySelectorAll('.poll-option');
    
    pollOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            pollOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            this.classList.add('selected');
            
            // Add visual feedback
            this.style.background = 'rgba(255, 68, 68, 0.1)';
            this.style.border = '1px solid #ff4444';
            
            console.log('Poll option selected:', this.querySelector('.option-text').textContent);
        });
    });
    
    // Scene tag interaction
    const sceneTags = document.querySelectorAll('.scene-tag');
    
    sceneTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add visual feedback
            this.style.background = 'rgba(255, 68, 68, 0.3)';
            this.style.color = '#ffffff';
            
            setTimeout(() => {
                this.style.background = 'rgba(255, 68, 68, 0.2)';
                this.style.color = '#ff6666';
            }, 300);
            
            console.log('Scene tag clicked:', this.textContent);
        });
    });
    
    // Mood board interaction
    const moodItems = document.querySelectorAll('.mood-item');
    
    moodItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(1.2)';
            this.style.background = 'rgba(255, 170, 0, 0.3)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 200);
            
            console.log('Mood item clicked:', this.textContent);
        });
    });
    
    // Profile avatar click
    const profileAvatars = document.querySelectorAll('.profile-avatar, .profile-avatar-large');
    
    profileAvatars.forEach(avatar => {
        avatar.addEventListener('click', function() {
            // Switch to profile page
            navLinks.forEach(l => l.classList.remove('active'));
            pageSections.forEach(s => s.classList.remove('active'));
            
            document.querySelector('a[href="#profile"]').classList.add('active');
            document.getElementById('profile').classList.add('active');
        });
    });
    
    // Initialize page
    console.log('CinePulse website loaded successfully!');
    console.log('All interactive features are ready.');
});
