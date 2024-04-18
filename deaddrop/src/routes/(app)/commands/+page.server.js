/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const auth = cookies.get('token');
  let endpoint_list = await fetch('http://backend:8000/backend/endpoints/', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token " + auth
    }
  })
  endpoint_list = await endpoint_list.json()
  return {
    "endpoint_list": endpoint_list

  };
};

export const actions = {
  default: async ({ cookies, request }) => {
    const form = await request.formData();
    const auth = cookies.get('token');
    // validation here
    //   console.log(form.json())
    console.log(form)
    let endpoint = form.get('endpoint');
    const res = await fetch(`http://backend:8000/backend/endpoints/${endpoint}/execute_command/`, {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + auth
      },
      body: JSON.stringify({
        "cmd_name": form.get('command'),
        "cmd_args": form.get('args')
      })
    })

    const json = await res.json();
    console.log("POST CMD", JSON.stringify(json));
  }
};