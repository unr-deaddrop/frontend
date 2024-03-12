/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    let pagedata = {}
    
    const agents = await fetch('http://127.0.0.1:8000/backend/agents/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    pagedata['agents'] = await agents.json() 
    pagedata['a_chart'] = build_chart(pagedata['agents'])
    console.log(pagedata['a_chart'])
    return {pagedata};
};

function build_chart(agents){
    let names = []
    let agent_freq = []
    
    for (let i = 0; i < agents.length; i++){
        names.push(agents[i].name)
    }
    
    agent_freq = get_freq(names)
    //remove duplicate names
    names = [... new Set(names)]
    console.log(agent_freq)
    const chart = {
        'labels': names,
        'datasets': [
            {
                data: agent_freq,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a']
            },
        ]
    }

    return chart
}

function get_freq(arr){
    return Object.values(arr.reduce((freq, cur_val)=>{
        freq[cur_val] = (freq[cur_val] || 0) + 1
        return freq
    }, {}))

}
/*
import { tasks } from '$lib/components/data'; // tasks is meant to be replaced by agent_list
    import PieChart from '$lib/components/PieChart.svelte';
    import ActionButton from '$lib/components/ActionButton.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    export let data;
    let {agent_types, agent_list, supported_oss, supported_protocols, endpoints_list} = data;
    console.log(agent_list) // you can yoink the name from here
    console.log((endpoints_list)) // you can yoink the endpoint counts from here
    
    //replacing lst=endpoints_list with lst
    //switched item.agent to item
    function get_count(id, lst) {
        const matchingItems = lst.filter(item => item === id);
        return matchingItems.length;
    }

    //temporary function for breaking down types of agents and displaying them, currently supports up to three "agnet-types", should I dynamically set colors?
    //nevermind name in agent must be unique, will eventually change name to agent type in the following function
    function make_piechart(agent_list){
        let agents = []
        let agent_types = []
        let freq = []

        //collect into types of agents
        for (let i = 0; i < agent_list.length; i++){
            agents.push(agent_list[i].name)
        }
        agent_types = agents.filter((value, index, self) => self.indexOf(value) === index);
        
        //get frequency of agent type
        for (let i = 0; i < agents.length; i++){
            let count = 0
            console.log(agent_types[i])
            count = get_count(agent_types[i], agents)
            freq.push(count)
        }

        //compile agent_data
        let piechart = {
            labels: agent_types,
            datasets: [{
                data: freq,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a'],
            }],
        }


    return piechart
    }

    let agent_data = make_piechart(agent_list)
*/
/*
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
*/