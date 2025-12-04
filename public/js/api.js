/**
 * API functions for agent dashboard
 */

const API_BASE_URL = '/api/agent';

class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}

/**
 * Generic GET request
 * @param {string} url - API endpoint
 * @param {Object} params - Query parameters
 * @returns {Promise<any>}
 */
async function apiGet(url, params = {}) {
    try {
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = queryString ? `${API_BASE_URL}${url}?${queryString}` : `${API_BASE_URL}${url}`;
        
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        });
        
        if (!response.ok) {
            throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error('GET request failed:', error);
        throw error;
    }
}

/**
 * Generic POST request
 * @param {string} url - API endpoint
 * @param {Object} data - Request body
 * @returns {Promise<any>}
 */
async function apiPost(url, data = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error('POST request failed:', error);
        throw error;
    }
}

/**
 * Generic PUT request
 * @param {string} url - API endpoint
 * @param {Object} data - Request body
 * @returns {Promise<any>}
 */
async function apiPut(url, data = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error('PUT request failed:', error);
        throw error;
    }
}

/**
 * Generic DELETE request
 * @param {string} url - API endpoint
 * @returns {Promise<any>}
 */
async function apiDelete(url) {
    try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });
        
        if (!response.ok) {
            throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error('DELETE request failed:', error);
        throw error;
    }
}

/**
 * Get auth token from localStorage
 * @returns {string|null}
 */
function getToken() {
    return localStorage.getItem('agent_token');
}

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
function isAuthenticated() {
    return !!getToken();
}

/**
 * Logout user
 */
function logout() {
    localStorage.removeItem('agent_token');
    localStorage.removeItem('agent_profile');
    window.location.href = '/agent/login.html';
}

// Export functions
window.Api = {
    get: apiGet,
    post: apiPost,
    put: apiPut,
    delete: apiDelete,
    isAuthenticated,
    logout,
    ApiError
};