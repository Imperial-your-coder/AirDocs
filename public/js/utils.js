/**
 * Utility functions for agent dashboard
 */

/**
 * Format amount in FC (Franc Congolais)
 * @param {number} amount - Amount to format
 * @returns {string} Formatted amount with " FC" suffix
 */
function formatAmount(amount) {
    if (typeof amount !== 'number') {
        amount = Number(amount) || 0;
    }
    
    return new Intl.NumberFormat('fr-FR').format(Math.round(amount)) + ' FC';
}

/**
 * Validate integer input
 * @param {string|number} value - Value to validate
 * @returns {boolean} True if valid integer
 */
function isValidInteger(value) {
    const num = Number(value);
    return Number.isInteger(num) && num >= 0;
}

/**
 * Show notification
 * @param {string} message - Notification message
 * @param {string} type - 'success', 'error', 'info', 'warning'
 * @param {number} duration - Duration in milliseconds
 */
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existing = document.querySelector('.notification-container');
    if (existing) existing.remove();
    
    // Create notification container
    const container = document.createElement('div');
    container.className = 'notification-container fixed top-4 right-4 z-50';
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification px-4 py-3 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
        type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
        type === 'warning' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
        'bg-blue-100 text-blue-800 border border-blue-200'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${
                    type === 'success' ? 
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>' :
                    type === 'error' ?
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>' :
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
                }
            </svg>
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(notification);
    document.body.appendChild(container);
    
    // Auto remove after duration
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => container.remove(), 300);
    }, duration);
}

/**
 * Generate avatar color based on string
 * @param {string} str - String to generate color from
 * @returns {string} Hex color code
 */
function generateAvatarColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colors = [
        '#3B82F6', // blue
        '#10B981', // green
        '#F59E0B', // amber
        '#EF4444', // red
        '#8B5CF6', // violet
        '#EC4899', // pink
        '#14B8A6', // teal
        '#F97316', // orange
    ];
    
    return colors[Math.abs(hash) % colors.length];
}

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} Initials (max 2 characters)
 */
function getInitials(name) {
    if (!name) return '?';
    
    return name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
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

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
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

/**
 * Parse date to relative time
 * @param {string|Date} date - Date to parse
 * @returns {string} Relative time string
 */
function timeAgo(date) {
    const now = new Date();
    const then = new Date(date);
    const seconds = Math.floor((now - then) / 1000);
    
    if (seconds < 60) return 'à l\'instant';
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `il y a ${minutes} min`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `il y a ${hours} h`;
    
    const days = Math.floor(hours / 24);
    if (days < 7) return `il y a ${days} j`;
    
    return then.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short'
    });
}

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date
 */
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<void>}
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Copié dans le presse-papier', 'success');
    } catch (err) {
        console.error('Failed to copy:', err);
        showNotification('Échec de la copie', 'error');
    }
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Generate unique ID
 * @param {number} length - Length of ID
 * @returns {string} Unique ID
 */
function generateId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
}

// Export functions
window.Utils = {
    formatAmount,
    isValidInteger,
    showNotification,
    generateAvatarColor,
    getInitials,
    debounce,
    throttle,
    timeAgo,
    formatDate,
    copyToClipboard,
    isValidEmail,
    generateId
};

// Initialize current date
document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = formatDate(new Date());
    }
});