/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {
        "log_id": params.log_id
    };
};