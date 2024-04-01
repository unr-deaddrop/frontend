/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    const pagedata = {}
    
    //note: if you want to make a call from /admin/backend, the uri is http://127.0.0.1:8000/api/backend/task, as opposed to http://127.0.0.1:8000/backend/tasks/
    const tasks = await fetch('http://backend:8000/backend/taskresults/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })
    
    const task_stats = await fetch('http://backend:8000/backend/taskresults/get_task_stats/',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })
    
    pagedata['task_stats'] = await task_stats.json()
    pagedata['tasks'] = await tasks.json()
    return {pagedata};
};