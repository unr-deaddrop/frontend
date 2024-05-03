/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    return {"auth": cookies.get('token')};
};