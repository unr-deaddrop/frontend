/** @type {import('./$types').PageLoad} */
export async function load() {
    var data = {};

    let comms_data_points = [12, 45, 67, 23, 5, 34, 89, 1, 56, 78, 9, 22, 68, 31, 74, 17, 83, 41, 3, 60, 29, 51, 14];

    const endpoints = await fetch(`http://127.0.0.1:8000/backend/endpoints/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['network_graph'] = { // for line chart
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
    }; // agent types, what the fuck is this
    data['endpoints_list'] = (await endpoints.json()); // fetch count endpoints with filter on agents
    return data;
};