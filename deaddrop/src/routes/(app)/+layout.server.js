import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({cookies}) {
    
    if(cookies.get('token') == null){
        console.log('null token')
        throw redirect(302, '/login')
    }

    const auth = cookies.get('token')
    const arbitrary_endpoint = 'http://backend.localhost/backend/agents'
    
    try {
        const authorize = await fetch(arbitrary_endpoint, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + auth
            },
        });
    } 
    
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw redirect(302, '/login')
        
    }
    
}
    
    
