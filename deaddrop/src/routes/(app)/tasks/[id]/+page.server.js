import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies, params}) {
    const auth = cookies.get('token')
    let pagedata = {}
    
    const task = await fetch(`http://backend.localhost/backend/taskresults/${params.id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    });
    pagedata['task'] = await task.json();
    let {detail} = pagedata['task']
    
    if(detail == 'Not found.'){
        throw error(404,{
            message: "Error: Task ID not found"
        })
    }
    return {pagedata};
};

/*
// this is https://unr-deaddrop.github.io/prototype_frontend/task_detail.html
// specific detail of an task
export async function load({params}) {
    
};


    var data = {};
    data['id'] = params.id;

    const task = await fetch(`http://backend.localhost/backend/tasks/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['task'] = await task.json();

    const endpoint = await fetch(`http://backend.localhost/backend/endpoints/?id=${data['task'].endpoint}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['endpoint'] = await endpoint.json(); // where to get

    data['user'] = data['task'].user; // where to get

    const task_result = await fetch(`http://backend.localhost/backend/taskresults/?task=${data['task'].id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    });
    data['task_result'] = await task_result.json();

    // needs to loop through list of task_results and fetch each
    // do this by creating a function and adding to logs
    // this is needed since task_result may be a list
    // i.e. multiple task_results to one task (but is this correct?)
    // even if that's not correct, i don't think the implementation changes anyway
    async function getLog(task_result) {
        console.log(task_result.id);
        let log = await fetch(`http://backend.localhost/backend/logs/?task_result=${task_result.task}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        });

        // logs.push(await log.json())
        return await log.json();
    }
    
    // data['associated_logs'] = logs; // where to get
    data['associated_logs'] = await Promise.all(data['task_result'].map(getLog));

    // however, if the above is not true and task_result should not be a list, this implementation should work fine and i'm leaving it here for future use
    // const logs = await fetch(`http://127.0.0.1:8000/backend/logs/?task_result=${data['task_result'].id}`, {
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     method: 'GET'
    // });
    // data['associated_logs'] = await logs.json(); // where to get
    return data;
*/
