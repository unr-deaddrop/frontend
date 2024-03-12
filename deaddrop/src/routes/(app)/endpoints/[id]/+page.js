/** @type {import('./$types').PageLoad} */
// this is https://unr-deaddrop.github.io/prototype_frontend/endpoint_detail.html

// specific detail of an endpoint
export async function load({params}) {
    var data = {};
    data['id'] = params.id;

    let comms_data_points = [12, 45, 67, 23, 5, 34, 89, 1, 56, 78, 9, 22, 68, 31, 74, 17, 83, 41, 3, 60, 29, 51, 14]

    const endpoint = await fetch(`http://backend:8000/backend/endpoints/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    const connections = await fetch(`http://backend:8000/backend/endpoints/?connections=${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    const tasks = await fetch(`http://backend:8000/backend/tasks/?endpoint=${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['endpoint'] = await endpoint.json();

    data['endpoint_name'] = data['endpoint'].name; // from endpoint
    data['local_connections'] = { // for line chart
        labels: [ // time data - x axis - corresponds to data in datasets
            '1AM', '2AM', '3AM', '4AM', '5AM', '6AM',
            '7AM', '8AM', '9AM', '10AM', '11AM', '12PM',
            '1PM', '2PM', '3PM', '4PM', '5PM', '6PM',
            '7PM', '8PM', '9PM', '10PM', '11PM',
        ],
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
                data: comms_data_points // the only important data point - corresponds to labels
            },
        ],
    }; // where to get
    data['connected_endpoints'] = await connections.json();
    data['associated_tasks'] = await tasks.json();
    
    return data;
};