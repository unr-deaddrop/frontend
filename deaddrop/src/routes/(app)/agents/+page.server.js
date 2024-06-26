import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    let pagedata ={}

    const agents = await fetch(`http://backend.localhost/backend/agents/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    });
    
    const endpnt_share = await fetch('http://backend.localhost/backend/agents/get_endpoint_share/',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth 
        }
    })

    

    let endpnts = await endpnt_share.json()
    pagedata['agents'] = await agents.json()
    pagedata['endpnt_chart'] = endpnt_chart(endpnts)
    return {pagedata};
};

function endpnt_chart(endpnts) {
    const chart = {
        'labels': endpnts.labels,
        'datasets': [
            {
                data: endpnts.values,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a']
            },
        ]
    }
  
    return chart
}


/** @type {import('./$types').Actions} */
export const actions = {
    api: async ({request, cookies}) => {
        const auth = cookies.get('token')
        const formData = await request.formData()

        console.log(formData);

        const res = await fetch('http://backend.localhost/backend/installAgent/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Authorization": "Token " + auth,
            },
            body: formData
        })

        const json = await res.json()
        let {task_id} = json
        throw redirect(302, `http://frontend.localhost/tasks/${task_id}`)  
    
    }
}