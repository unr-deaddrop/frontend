/** @type {import('./$types').PageLoad} */
export async function load() {
    var data = {};
    let endpt_comms_data = [40, 30, 30]

    const tasks = await fetch(`http://127.0.0.1:8000/backend/tasks/`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    const running_tasks = await fetch(`http://127.0.0.1:8000/backend/tasks/?in_progress=1`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    
    const completed_tasks = await fetch(`http://127.0.0.1:8000/backend/tasks/?in_progress=0`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });

    data['task_list'] = await tasks.json(); // fetch
    data['running_tasks'] = await running_tasks.json();
    data['completed_tasks'] = await completed_tasks.json();
    return data;
};