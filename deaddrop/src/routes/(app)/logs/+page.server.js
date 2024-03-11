import { page } from '$app/stores';
import { idText } from 'typescript';
import user from '../../login/user';
import { get } from 'svelte/store';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const auth = get(user).token
    const pagedata = {}

    const logs = await fetch('http://backend:8000/backend/logs/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    pagedata['logs'] = await logs.json()
    pagedata['agent_chart'] = make_chart('agent', pagedata['logs'])
    pagedata['server_chart'] = make_chart('server', pagedata['logs'])
    return {pagedata}
}

function make_chart(type, logs){
    const labels = [
    '1AM', '2AM', '3AM', '4AM', '5AM', '6AM',
    '7AM', '8AM', '9AM', '10AM', '11AM', '12PM',
    '1PM', '2PM', '3PM', '4PM', '5PM', '6PM',
    '7PM', '8PM', '9PM', '10PM', '11PM',
    ]

    if(type =='agent'){
        logs = logs.filter(item => item.source !== null)
        console.log(logs)
        let freq = get_hour_freq(logs)
    }
    
    else {
        logs = logs.filter(item => item.source == null)
        
    }

    return logs
}

function get_hour_freq(logs){
    let hours = Array(23).fill(0)
  
    return true
}

/*
/** @type {import('../payloads/generate/$types').PageLoad} */
/*
export async function load() {
    let data = {}

    // Your other data initialization code remains unchanged...

    const logsResponse = await fetch(`http://127.0.0.1:8000/backend/logs/`, {
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
*/