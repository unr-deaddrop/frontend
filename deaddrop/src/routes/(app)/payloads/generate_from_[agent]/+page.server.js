/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let agent_id = params.agent; 
  let agent_metadata = await fetch(`http://backend:8000/backend/agents/${agent_id}/get_metadata/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
  })
  agent_metadata = await agent_metadata.json()
  let protocol_schemas = []
  agent_metadata["protocol_config"].forEach(protocol => {
      let option = {"name": protocol["name"], "config": protocol['config']}
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
  default: async ({ params, request }) => {
      // let endpoint_id = params.endpoint; 
      const form = await request.formData();
      // validation here
      //   console.log(form.json())
      console.log('form1', form)
      
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
      // const res = await fetch(`http://backend:8000/backend/endpoints/${endpoint_id}/execute_command/`, {
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