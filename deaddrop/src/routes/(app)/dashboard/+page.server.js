import user from '../../login/user';
import { get } from 'svelte/store';
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    //console.log(get(user).token)
    //if(cookies.get('token') != '0000'){console.log(cookies.get('token'))}
    //console.log(cookies.get('token'))
   
    return {};
};