/** @type {import('./$types').PageLoad} */
export async function load() {
    var data = {};
    let endpt_comms_data = [40, 30, 30]

    const agents = await fetch(`http://127.0.0.1:8000/backend/agents/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    const endpoints = await fetch(`http://127.0.0.1:8000/backend/endpoints/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['agent_types'] = { // for pie chart
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                data: endpt_comms_data,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a'],
            },
        ],
    }; // agent types, what the fuck is this
    data['agent_list'] = await agents.json(); // fetch
    data['supported_oss'] = 'windows 10 calc at run time'; // calc at run time
    data['supported_protocols'] = 'protocol calc at run time'; // calc at run time
    data['endpoints_list'] = (await endpoints.json()); // fetch count endpoints with filter on agents
    return data;
};