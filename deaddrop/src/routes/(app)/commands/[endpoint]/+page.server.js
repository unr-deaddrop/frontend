/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let endpoint_id = params.endpoint; 
    let cmd_list = await fetch(`http://backend.localhost/backend/endpoints/${endpoint_id}/get_command_metadata/`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
    })
    cmd_list = await cmd_list.json()
    // console.log("43 cmd_list")
    // console.log(cmd_list)
    let cmd_options = []
    let i = 0
    cmd_list.forEach(cmd => {
        // console.log(cmd)
        let option = {text: cmd['name'], value: i}
        cmd_options = [...cmd_options, option]
        i++;
    })
    return {
        "endpoint_id": endpoint_id,
        "cmd_list": cmd_list, 
        "cmd_options": cmd_options

    };
};

export const actions = {
    default: async ({ params, request }) => {
        let endpoint_id = params.endpoint; 
        const form = await request.formData();
        // validation here
        //   console.log(form.json())
        console.log('form', form)
        console.log('args', typeof(form.get('args')), JSON.stringify(form.get('args')))
        console.log('endpoint', endpoint_id)
        let execute_form = {
            "cmd_name": form.get('command'),
            "cmd_args": JSON.parse(form.get('args'))
        }
        console.log('execute_form', execute_form)
        const res = await fetch(`http://backend:8000/backend/endpoints/${endpoint_id}/execute_command/`, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(execute_form)
        })
        
        const json = await res.json();
        console.log("POST CMD", JSON.stringify(json));
    }
  };