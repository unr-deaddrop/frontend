/** @type {import('./$types').PageServerLoad} */
export async function load({cookies, params}) {
    const auth = cookies.get('token')
    let pagedata = {}
    
    const agents = await fetch(`http://backend.localhost/backend/agents/${params.id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    });
    
    const agent_metadata = await fetch(`http://backend.localhost/backend/agents/${params.id}/get_metadata`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    })

    const agent_commands = await fetch(`http://backend.localhost/backend/agents/${params.id}/get_command_metadata`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    })

    const related_endpnts = await fetch(`http://backend.localhost/backend/endpoints/?agent=${params.id}`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    })

    pagedata['agents'] = await agents.json();
    pagedata['agent_metadata'] = await agent_metadata.json()
    pagedata['agent_commands'] = await agent_commands.json()
    pagedata['rel_endpnts'] = await related_endpnts.json()
    pagedata['id'] = params.id
    return {pagedata};
};