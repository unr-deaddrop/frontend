/** @type {import('../payloads/generate/$types').PageLoad} */
export async function load() {
    let data = {}

    const comms_data_points = [50, 45, 67, 23, 5, 34, 89, 1, 56, 78, 9, 22, 68, 31, 74, 17, 83, 41, 3, 60, 29, 51, 14]

    data['comms_data'] = { // for line chart
        
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
    };
    
    const endpt_comms_data = [40, 30, 40]
    data['endpt_comms'] = { // for pie chart
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                data: endpt_comms_data,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a'],
            },
        ],
    };
    

    data['tasks'] = [ // for log list
        ["id", "endpoint", " by", "start time"],
        ["2", "WORKSTATION2", "USER", "2023-11-06 14:34:23"],
        ["3", "WORKSTATION3", "USER", "2023-11-06 14:34:23"],
    ]
    
    const logs = await fetch(`http://127.0.0.1:8000/backend/logs/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    async function getLogDetails(log) {
        console.log(log.id);
        let data = {};
        let endpoint = await fetch(`http://127.0.0.1:8000/backend/endpoints/?id=${log.source}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });
        let task = await fetch(`http://127.0.0.1:8000/backend/tasks/?id=${log.task}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });
        let task_result = await fetch(`http://127.0.0.1:8000/backend/taskresults/?id=${log.task_result}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        data['log'] = await log.json(); // does this work?
        data['source'] = await endpoint.json(); // get name
        data['user'] = data['log'].user; // get name
        data['task'] = (await task.json()); // get name
        data['task_result'] = (await task_result.json()); // what is this doing here
        return data;
    }
    
    data['log_list'] = await logs.json(); // fetch
    data['log_rows'] = await Promise.all(data['log_list'].map(getLogDetails));

    return data; // should return tasks and comms_data in the form of data.js
};