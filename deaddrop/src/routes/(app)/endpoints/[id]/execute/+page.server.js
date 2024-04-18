/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    const auth = cookies.get('token')
    let endpoint_id = params.id; 
    let cmd_list = await fetch(`http://backend:8000/backend/endpoints/${endpoint_id}/get_command_metadata/`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + auth
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
    default: async ({ cookies, params, request }) => {
        let endpoint_id = params.id; 
        const form = await request.formData();
        const auth = cookies.get('token')
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
                "Authorization": "Token " + auth
            },
            body: JSON.stringify(execute_form)
        })
        
        const json = await res.json();
        console.log("POST CMD", JSON.stringify(json));
    }
  };