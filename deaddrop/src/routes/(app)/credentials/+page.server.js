/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    let pagedata ={}
    
    const credentials = await fetch('http://backend.localhost/backend/credentials/',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    pagedata['credentials'] = await credentials.json()
    return {pagedata};
};