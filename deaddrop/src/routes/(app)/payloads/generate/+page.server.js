/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let agent_id = '3'; 
  let agent_metadata = await fetch(`http://backend:8000/backend/agents/${agent_id}/get_metadata/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
  })
  agent_metadata = await agent_metadata.json()
  // console.log("43 agent_metadata")
  // console.log(agent_metadata)
  let protocol_schemas = []
  agent_metadata["protocol_config"].forEach(protocol => {
      // console.log(protocol)
      let option = {"name": protocol["name"], "config": protocol['config']}
      console.log('config', typeof(option['config']), 'properties', typeof(option['config']['properties']))

      for (const [key, value] of Object.entries(option['config']['properties'])){
        console.log(typeof(key), key)
        console.log(typeof(value), value)
      }

      console.log("server option", typeof(option), option)
      console.log("protocol['config']", typeof(protocol['config']), protocol['config'])
      protocol_schemas = [...protocol_schemas, option]
    })
    console.log("server protocol_schemas", protocol_schemas)
    // console.log("server config type", protocol_schemas)
    return {
      "agent_id": agent_id,
      "agent_metadata": agent_metadata, 
      "agent_schema": agent_metadata["config"],
      "protocol_schemas": protocol_schemas

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