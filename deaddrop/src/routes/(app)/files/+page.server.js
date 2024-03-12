/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    let pagedata = {}

    const files = await fetch('http://127.0.0.1:8000/backend/files/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })
    pagedata['files'] = await files.json()

    return {pagedata};
};