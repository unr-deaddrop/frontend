import moment from 'moment-timezone'

/** @type {import('./$types').PageLoad} */
export async function load({cookies, url}) {
    const auth = cookies.get('token')
    const query = url.searchParams.toString()
    const pagedata = {}

    const logs = await fetch('http://backend.localhost/backend/logs?'+query, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    const split_logs = await fetch('http://backend.localhost/backend/messages/get_split_recent_stats/',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    let {sent_by_agent, sent_by_server} = await split_logs.json()
    pagedata['agent_data'] = comms_chart(sent_by_agent)
    pagedata['server_data'] = comms_chart(sent_by_server)
    let data = await logs.json()
    pagedata['logs'] = data['results']


    
    return {pagedata}
}

function comms_chart(data){
    let labels = []
    
    for(let i = 0; i <24; i++){
        labels.push(moment().subtract(i, 'hour').format('MM-DD h A'))
    }
    labels.reverse()

    let comms_chart = { // for line chart
        labels: labels,
        datasets: [
        {
            label: 'Communications',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(184, 185, 210, .3)',
            borderColor: '#a60707',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#a60707',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(0, 0, 0)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data 
        },
        ],
    }

    return comms_chart
}

/*
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
