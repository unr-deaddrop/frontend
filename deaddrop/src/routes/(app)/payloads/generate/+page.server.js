/** @type {import('./$types').PageServerLoad} */

import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "schema";
import { redirect, fail } from "@sveltejs/kit";

export async function load() {
    return {};
};

export const actions = {
    default: async (event) => {
      const form = await superValidate(event, formSchema);
      if (!form.valid) {
        return fail(400, {
          form
        });
      }
      console.log(form.data)
      const res = await fetch('http://127.0.0.1:8000/backend/endpoints/', {
        method: 'POST',
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.data)
      })
        
      const json = await res.json();
      console.log("POST ADD", JSON.stringify(json));
      redirect(302, 'http://127.0.0.1:5173/payloads'); // could possibly redirect to endpoints
    }
  };