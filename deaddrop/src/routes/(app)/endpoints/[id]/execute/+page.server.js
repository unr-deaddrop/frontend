import { error, redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    const auth = cookies.get('token')
    let endpoint_id = params.id; 
    let cmd_list = await fetch(`http://backend.localhost/backend/endpoints/${endpoint_id}/get_command_metadata/`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + auth
        }
    });
    cmd_list = await cmd_list.json();
    let cmd_options = [];
    let i = 0;
    cmd_list.forEach(cmd => {
        // console.log(cmd)
        let option = {text: cmd['name'], value: i}
        cmd_options = [...cmd_options, option]
        i++;
    });

    // Get commands associated with this agent
    let endpoint_data = await fetch(`http://backend:8000/backend/endpoints/${endpoint_id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + auth
        }
    });
    let endpoint_dict = await endpoint_data.json();
    let agent_id = endpoint_dict["agent"];
    const agent_commands = await fetch(`http://backend:8000/backend/agents/${agent_id}/get_command_metadata`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
        method: 'GET'
    })

    // console.log("43 cmd_list")
    // console.log(cmd_list)

    return {
        "endpoint_id": endpoint_id,
        "cmd_list": cmd_list, 
        "cmd_options": cmd_options,
        "agent_commands": await agent_commands.json()
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
        const res = await fetch(`http://backend.localhost/backend/endpoints/${endpoint_id}/execute_command/`, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + auth
            },
            body: JSON.stringify(execute_form)
        })
        
        const json = await res.json();
        let {task_id} = json
        let {celery_id} = json
        console.log("POST CMD", JSON.stringify(json));
        console.log(task_id)
      
        if(celery_id == undefined){
            console.log('execute')
            // {"cmd_name":["This field may not be blank."]}
            // {"error":"{'global': [ErrorDetail(string=\"'filepath' is a required property\", code='invalid')]}"}
            let {error} = json
            let {cmd_name} = json
            
            if(error == undefined){
                return {"cmd_name": cmd_name}
            }

            else{ 
                return {"error":  error}
            }
            // throw error(404, {
            //     message: "empty"
            // })
        }
        else{
            throw redirect(302, `http://frontend.localhost/tasks/${task_id}`)  
        }
        
        
    }
  };