import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({cookies}) {
    console.log(cookies.get('sessionid'))
    if(cookies.get('sessionid') != '0000'){throw redirect(302, '/login')}
    return {};
}