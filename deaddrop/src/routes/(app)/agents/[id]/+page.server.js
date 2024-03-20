/** @type {import('./$types').PageServerLoad} */
export async function load({cookies, params}) {
    const auth = cookies.get('token')
    let pagedata = {}
    
    const agents = await fetch(`http://backend:8000/backend/agents/${params.id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    });

    const related_endpnts = await fetch(`http://backend:8000/backend/endpoints/?agent=${params.id}`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    })

    pagedata['agents'] = await agents.json();
    pagedata['rel_endpnts'] = await related_endpnts.json()
    return {pagedata};
};