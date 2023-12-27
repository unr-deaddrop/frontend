/** @type {import('../payloads/generate/$types').PageLoad} */
export async function load() {
    const comms_data_points = [50, 45, 67, 23, 5, 34, 89, 1, 56, 78, 9, 22, 68, 31, 74, 17, 83, 41, 3, 60, 29, 51, 14]

    const comms_data = { // for line chart
        
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
    const endpt_comms = { // for pie chart
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                data: endpt_comms_data,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a'],
            },
        ],
    };
    

    let tasks = [ // for log list
        ["id", "endpoint", "initiated by", "start time"],
        ["2", "WORKSTATION2", "USER", "2023-11-06 14:34:23"],
        ["3", "WORKSTATION3", "USER", "2023-11-06 14:34:23"],
    ]

    // tasks = []
    
    

    return {
        comms_data : comms_data,
        endpt_comms : endpt_comms,
        tasks : tasks
    }; // should return tasks and comms_data in the form of data.js
};