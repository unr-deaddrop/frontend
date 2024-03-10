/** @type {import('../payloads/generate/$types').PageLoad} */
export async function load() {
    let data = {}

    // Your other data initialization code remains unchanged...

    const logsResponse = await fetch(`http://backend:8000/backend/logs/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    // Handling response from fetch
    if (logsResponse.ok) {
        data['log_list'] = await logsResponse.json(); // fetch
        // Ensure log_list is an array before using map
        if (Array.isArray(data['log_list'])) {
            data['log_rows'] = await Promise.all(data['log_list'].map(getLogDetails));
        } else {
            // If log_list is not an array, handle the error here
            console.error("Error: Log data is not in the expected format.");
        }
    } else {
        // Handle fetch error
        console.error("Error fetching log data:", logsResponse.status, logsResponse.statusText);
    }

    return data;
};
