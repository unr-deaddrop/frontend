/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    var data = {};
    data['token'] = cookies.get('token');

    return data;
};