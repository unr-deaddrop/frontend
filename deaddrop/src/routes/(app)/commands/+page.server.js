/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let endpoint_list = await fetch('http://backend:8000/backend/endpoints/', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
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
      // validation here
    //   console.log(form.json())
      console.log(form)
      let id = '0';
      const res = await fetch(`http://127.0.0.1:8000/backend/endpoints/${id}/execute_command/`, {
        method: 'POST',
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      })
        
      const json = await res.json();
      console.log("POST CMD", JSON.stringify(json));
    }
  };