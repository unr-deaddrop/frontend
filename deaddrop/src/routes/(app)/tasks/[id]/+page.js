/** @type {import('./$types').PageLoad} */
// this is https://unr-deaddrop.github.io/prototype_frontend/task_detail.html
// specific detail of an task
export async function load({params}) {
    var data = {};
    data['id'] = params.id;

    const task = await fetch(`http://127.0.0.1:8000/backend/tasks/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['task'] = await task.json();

    const endpoint = await fetch(`http://127.0.0.1:8000/backend/endpoints/?id=${data['task'].endpoint}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['endpoint'] = await endpoint.json(); // where to get

    data['user'] = data['task'].user; // where to get

    const task_result = await fetch(`http://127.0.0.1:8000/backend/taskresults/?task=${data['task'].id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['task_result'] = await task_result.json(); // where to get

    const logs = await fetch(`http://127.0.0.1:8000/backend/logs/?task_result=${data['task_result'].id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['associated_logs'] = await logs.json(); // where to get
    return data;
};