import user from '../../login/user';
import { get } from 'svelte/store';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const auth = get(user).token
    const pagedata = {}
    //note: if you want to make a call from /admin/backend, the uri is http://127.0.0.1:8000/api/backend/task, as opposed to http://127.0.0.1:8000/backend/tasks/
    const tasks = await fetch('http://127.0.0.1:8000/backend/tasks/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })
    
    const endpoints = await fetch('http://127.0.0.1:8000/backend/endpoints/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    pagedata['tasks'] = await tasks.json()
    pagedata['endpoints'] = await endpoints.json()
    pagedata['endpt_chart'] = endpnt_chart(pagedata['endpoints'])

    return {pagedata};
};

function endpnt_chart(endpnts) {
    const names = []
    let endpt_freq = []

    for (let i = 0; i < endpnts.length; i++){
        names.push(endpnts[i].name)
    }

    endpt_freq = get_freq(names)
    
    const chart = {
        'labels': names,
        'datasets': [
            {
                data: [1, 1],
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a']
            },
        ]
    }

    return chart
}

function get_freq(arr){
    return arr.reduce((freq, cur_val)=>{
        freq[cur_val] = (freq[cur_val] || 0) + 1
        return freq
    }, {})
}