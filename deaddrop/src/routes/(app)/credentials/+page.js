/** @type {import('./$types').PageLoad} */
export async function load() {
    var data = {};

    const credentials = await fetch(`http://127.0.0.1:8000/backend/credentials/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['credentials_list'] = await credentials.json(); // fetch
    // data['agent_source'] = 'windows 10 calc at run time';
    // data['filename'] = 'protocol calc at run time';
    // data['filepath'] = (await endpoints.json());
    // data['value'] = (await endpoints.json());
    // data['timestamp'] = (await endpoints.json());
    return data;
};