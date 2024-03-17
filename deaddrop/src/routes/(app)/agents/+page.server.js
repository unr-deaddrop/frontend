/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    let pagedata ={}

    const agents = await fetch(`http://backend:8000/backend/agents/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    });

    pagedata['agents'] = await agents.json()
    return {pagedata};
};