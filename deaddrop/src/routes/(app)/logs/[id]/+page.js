/** @type {import('./$types').PageLoad} */
// this is https://unr-deaddrop.github.io/prototype_frontend/log_detail.html
// specific detail of an log
export async function load({params}) {
    var data = {};
    data['id'] = params.id;

    const log = await fetch(`http://backend:8000/backend/logs/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['log'] = await log.json();

    const endpoint = await fetch(`http://backend:8000/backend/endpoints/?id=${data['log'].source}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    const task = await fetch(`http://backend:8000/backend/tasks/?id=${data['log'].task}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    const task_result = await fetch(`http://backend:8000/backend/taskresults/?id=${data['log'].task_result}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['source'] = await endpoint.json();
    // data['user'] = await user.json();
    data['user'] = data['log'].user;
    data['task'] = (await task.json());
    data['task_result'] = (await task_result.json());
    return data;
};