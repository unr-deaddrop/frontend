/** @type {import('./$types').PageLoad} */
export async function load() {
    var data = {};

    const files = await fetch(`http://127.0.0.1:8000/backend/files/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    async function getFileDetails(file) {
        console.log(file.id);
        let data = {};
        // a file should only have one task associated with it
        let task = await fetch(`http://127.0.0.1:8000/backend/tasks/?id=${file.task}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        data['task'] = (await task.json()); // get name

        // a file should only have one endpoint associated with it
        let endpoint = await fetch(`http://127.0.0.1:8000/backend/endpoints/?id=${data['task'].endpoint}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        data['file'] = file; // does this work?
        data['endpoint_source'] = await endpoint.json(); // endpoint_source = agent_source // get name from this
        // data['timestamp'] = (await endpoints.json()); // what timestamp to show?
        return data;
    }

    data['file_list'] = await files.json(); // fetch
    data['file_rows'] = await Promise.all(data['file_list'].map(getFileDetails)); 
    return data;
};