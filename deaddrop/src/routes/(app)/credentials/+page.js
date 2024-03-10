/** @type {import('./$types').PageLoad} */
export async function load() {
    var data = {};

    const credentials = await fetch(`http://backend:8000/backend/credentials/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    async function getCredentialDetails(credential) {
        console.log(credential.id);
        let data = {};
        // a credential should only have one task associated with it
        let task = await fetch(`http://backend:8000/backend/tasks/?id=${credential.task}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        data['task'] = (await task.json()); // get name

        // a credential should only have one endpoint associated with it
        let endpoint = await fetch(`http://backend:8000/backend/endpoints/?id=${data['task'].endpoint}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        data['credential'] = credential; // does this work? // get value, expiry and other row details from this
        data['endpoint_source'] = await endpoint.json(); // endpoint_source = agent_source // get name from this
        // data['filename'] = await endpoint.json(); // what filename to show? i think this shouldn't be here
        // data['source'] = await endpoint.json(); // what source to show? i think this shouldn't be here
        // data['timestamp'] = (await endpoints.json()); // what timestamp to show?
        return data;
    }

    data['credential_list'] = await credentials.json(); // fetch
    data['credential_rows'] = await Promise.all(data['credential_list'].map(getCredentialDetails)); 
    return data;
};