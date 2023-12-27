/** @type {import('./$types').PageLoad} */
export async function load() {
    let agent_list;
    return {
        agent_list: agent_list // fetch from db
    };
};