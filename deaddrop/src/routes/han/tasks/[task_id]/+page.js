/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {
        "task_id": params.task_id
    };
};