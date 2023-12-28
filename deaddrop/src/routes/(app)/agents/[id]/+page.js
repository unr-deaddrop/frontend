/** @type {import('./$types').PageLoad} */
// this is https://unr-deaddrop.github.io/prototype_frontend/agent_detail.html
// specific detail of an agent
export async function load({params}) {
    var data = {};
    data['id'] = params.id;

    const agent = await fetch(`http://127.0.0.1:8000/backend/agents/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    const endpoints = await fetch(`http://127.0.0.1:8000/backend/endpoints/?agent=${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['agent'] = await agent.json();

    data['agent_name'] = data['agent'].name; // from agent
    data['developed_by'] = 'developed_by'; // where to get
    data['source_code'] = 'source_code'; // where to get
    data['version'] = 'version'; // where to get
    data['supported_oss'] = 'supported_oss'; // where to get
    data['support_protocols'] = 'support_protocols'; // where to get
    
    data['associated_endpoints'] = await endpoints.json(); // fetch and then filter
    return data;
};