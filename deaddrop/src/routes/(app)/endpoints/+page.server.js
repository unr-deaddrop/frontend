/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    let pagedata = {};
    const auth = cookies.get('token')

    const endpoints = await fetch(`http://backend.localhost/backend/endpoints/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    });

    pagedata['endpnts'] = await endpoints.json()
    return {pagedata}
};