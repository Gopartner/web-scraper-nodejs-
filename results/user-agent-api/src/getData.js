// src/getData.js

// Function to fetch data from given URL with specified method
export async function fetchData(method, url) {
    try {
        const options = {
            method: method,
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Fetched data:', data);  // Debugging output to see the exact structure

        // Check for possible structures and return the appropriate one
        if (Array.isArray(data)) {
            return data;
        } else if (data && Array.isArray(data.userAgents)) {
            return data.userAgents;
        } else if (data && Array.isArray(data.agents)) {
            return data.agents;
        } else {
            console.error('Unexpected data structure:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

