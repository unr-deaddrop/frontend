import user from '../../login/user';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    if(cookies.get('token') != '0000'){console.log(cookies.get('token'))}
    //console.log(cookies.get('token'))
    // 60bea874042182f30eab35c1405d420e4b09855d
    return {};
};