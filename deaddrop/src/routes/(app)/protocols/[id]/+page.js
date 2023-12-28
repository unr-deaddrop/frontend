/** @type {import('./$types').PageLoad} */
// this is https://unr-deaddrop.github.io/prototype_frontend/protocol_detail.html
// specific detail of an protocol
export async function load({params}) {
    var data = {};
    data['id'] = params.id;

    const protocol = await fetch(`http://127.0.0.1:8000/backend/protocols/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    const endpoints = await fetch(`http://127.0.0.1:8000/backend/endpoints/?protocol=${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['protocol'] = await protocol.json();

    data['protocol_name'] = data['protocol'].name; // from protocol
    data['developed_by'] = 'developed_by'; // where to get
    data['source_code'] = 'source_code'; // where to get
    data['version'] = 'version'; // where to get
    data['supported_oss'] = 'supported_oss'; // where to get
    data['definition_path'] = 'definition_path'; // where to get
    
    data['associated_endpoints'] = await endpoints.json(); // fetch and then filter
    return data;
};