/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    let pagedata = {}

    const tasks = await fetch('http://127.0.0.1:8000/backend/taskresults/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    pagedata['taskresults'] = await tasks.json()
    return {pagedata};
};