/** @type {import('./$types').PageLoad} */
// this is https://unr-deaddrop.github.io/prototype_frontend/agent_detail.html
// specific detail of an agent
export async function load({params}) {
    var data = {};
    data['id'] = params.id;

    const res = await fetch(`http://127.0.0.1:8000/backend/agents/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['agent'] = await res.json();

    data['agent_name'] = data['agent'].name; // from agent
    data['developed_by'] = 'developed_by'; // where to get
    data['source_code'] = 'source_code'; // where to get
    data['version'] = 'version'; // where to get
    data['supported_oss'] = 'supported_oss'; // where to get
    data['support_protocols'] = 'support_protocols'; // where to get
    
    data['associated_endpoints'] = ''; // fetch and then filter
    return data;
};