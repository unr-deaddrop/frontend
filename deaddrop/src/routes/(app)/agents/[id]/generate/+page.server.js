import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
  const auth = cookies.get('token')
  let agent_id = params.id;
  let agent_metadata = await fetch(`http://backend.localhost/backend/agents/${agent_id}/get_metadata/`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token " + auth
    }
  })
  agent_metadata = await agent_metadata.json()

  let {detail} = agent_metadata
  if(detail == 'Not found.'){
    throw error(404,{
      message: 'Error: Agent ID not found'
    })
  }

  let protocol_schemas = []
  agent_metadata["protocol_config"].forEach(protocol => {
    let option = { "name": protocol["name"], "config": protocol['config'] }
    protocol_schemas = [...protocol_schemas, option]
  })

 
  return {
    "agent_id": agent_id,
    "agent_metadata": agent_metadata,
    "agent_schema": agent_metadata["config"],
    "protocol_schemas": protocol_schemas

  };
};

export const actions = {
  default: async ({ cookies, params, request }) => {
    const auth = cookies.get('token');
    let agent_id = params.id;

    // let endpoint_id = params.endpoint; 
    const form = await request.formData();
    // validation here
    //   console.log(form.json())
    console.log('form1', form)

    // Expected format by server is as follows:
    let payload_data = {
      "name": form.get('name'),
      "hostname": form.get('hostname'),
      "address": form.get('address'),
      "is_virtual": false, // FIXME: I don't see this in the form for some reason
      "agent_cfg": {
        "agent_config": JSON.parse(form.get('agent_config')),
        "protocol_config": JSON.parse(form.get('protocol_config'))
      },
      "protocol_state": null, // Currently unused by the form
      "payload_file": null, // Should be null when user-generated
      "agent": agent_id,
      "connections": [] // Not currently supported through the form
    }

    console.log("payload_data", payload_data)
    let agent_metadata = await fetch(`http://backend.localhost/backend/endpoints/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + auth
      },
      body: JSON.stringify(payload_data)
    })
    
    let result = await agent_metadata.json()
    // Redirect based on this result
    console.log("/////")
    console.log("payload_data_result", result)
    let {task_id} = result
    throw redirect(302, `http://frontend.localhost/tasks/${task_id}`) 

    // console.log('form2', JSON.parse(form))
    // console.log('form3', (form.get('agent_config')))
    // console.log('form3', JSON.stringify(form.get('agent_config')))
    // console.log('form4', (form.get('protocol_config')))
    // console.log('form4', JSON.stringify(form.get('protocol_config')))
    // console.log('form4', typeof(form.get('protocol_config')), typeof(form.get('agent_config')))

    // console.log('args', typeof(form.get('args')), JSON.stringify(form.get('args')))
    // console.log('endpoint', endpoint_id)
    // let execute_form = {
    //     "cmd_name": form.get('command'),
    //     "cmd_args": JSON.parse(form.get('args'))
    // }
    // console.log('execute_form', execute_form)
    // const res = await fetch(`http://backend.localhost/backend/endpoints/${endpoint_id}/execute_command/`, {
    //     method: 'POST',
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(execute_form)
    // })

    // const json = await res.json();
    // console.log("POST CMD", JSON.stringify(json));
  }
};